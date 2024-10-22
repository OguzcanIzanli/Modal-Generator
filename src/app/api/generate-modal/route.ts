import { NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";

export async function POST(request: Request) {
  try {
    const userConfig = await request.json();
    console.log("Received userConfig:", userConfig); // modal data from embed code generator

    const {
      entry,
      title,
      sizes,
      color,
      position,
      device,
      afterSeconds,
      afterScroll,
      trafficSource,
      webhookUrl,
    } = userConfig;

    // Image
    const image = {
      ...(userConfig.image.logoUrl && { logoUrl: userConfig.image.logoUrl }),
      ...(userConfig.image.imageUrl && { imageUrl: userConfig.image.imageUrl }),
    };

    // Content
    const content = {
      ...(userConfig.content.content1 && {
        content1: userConfig.content.content1,
      }),
      ...(userConfig.content.content2 && {
        content2: userConfig.content.content2,
      }),
      ...(userConfig.content.content3 && {
        content3: userConfig.content.content3,
      }),
    };

    // Button
    const button = {
      ...(userConfig.button.buttonAnchor && {
        buttonAnchor: userConfig.button.buttonAnchor,
      }),
      ...(userConfig.button.buttonAnchorLink && {
        buttonAnchorLink: userConfig.button.buttonAnchorLink,
      }),
      ...(userConfig.button.buttonAnchor2 && {
        buttonAnchor2: userConfig.button.buttonAnchor2,
      }),
      ...(userConfig.button.buttonAnchorLink2 && {
        buttonAnchorLink2: userConfig.button.buttonAnchorLink2,
      }),
      ...(userConfig.button.buttonAnchor3 && {
        buttonAnchor3: userConfig.button.buttonAnchor3,
      }),
      ...(userConfig.button.buttonAnchorLink3 && {
        buttonAnchorLink3: userConfig.button.buttonAnchorLink3,
      }),
      ...(userConfig.button.button2 && { button2: userConfig.button.button2 }),
    };

    // Link
    const link = {
      ...(userConfig.link.link1 && { link1: userConfig.link.link1 }),
      ...(userConfig.link.linkURL1 && { linkURL1: userConfig.link.linkURL1 }),
      ...(userConfig.link.link2 && { link2: userConfig.link.link2 }),
      ...(userConfig.link.linkURL2 && { linkURL2: userConfig.link.linkURL2 }),
    };

    // Input
    const input = {
      ...(userConfig.input.name && { name: userConfig.input.name }),
      ...(userConfig.input.email && { email: userConfig.input.email }),
      ...(userConfig.input.phone && { phone: userConfig.input.phone }),
    };

    // Radio
    const radio = {
      ...(userConfig.radio.label1 && {
        label1: userConfig.radio.label1,
      }),
      ...(userConfig.radio.label1b && {
        label1b: userConfig.radio.label1b,
      }),
      ...(userConfig.radio.label2 && {
        label2: userConfig.radio.label2,
      }),
      ...(userConfig.radio.label2b && {
        label2b: userConfig.radio.label2b,
      }),
      ...(userConfig.radio.label3 && {
        label3: userConfig.radio.label3,
      }),
      ...(userConfig.radio.label3b && {
        label3b: userConfig.radio.label3b,
      }),
    };

    // Feedback
    const feedback = {
      ...(userConfig.feedback.feedbackURL1 && {
        feedbackURL1: userConfig.feedback.feedbackURL1,
      }),
      ...(userConfig.feedback.feedbackURL1Label && {
        feedbackURL1Label: userConfig.feedback.feedbackURL1Label,
      }),
      ...(userConfig.feedback.feedbackURL2 && {
        feedbackURL2: userConfig.feedback.feedbackURL2,
      }),
      ...(userConfig.feedback.feedbackURL2Label && {
        feedbackURL2Label: userConfig.feedback.feedbackURL2Label,
      }),
      ...(userConfig.feedback.feedbackURL3 && {
        feedbackURL3: userConfig.feedback.feedbackURL3,
      }),
      ...(userConfig.feedback.feedbackURL3Label && {
        feedbackURL3Label: userConfig.feedback.feedbackURL3Label,
      }),
      ...(userConfig.feedback.feedbackURL4 && {
        feedbackURL4: userConfig.feedback.feedbackURL4,
      }),
      ...(userConfig.feedback.feedbackURL4Label && {
        feedbackURL4Label: userConfig.feedback.feedbackURL4Label,
      }),
      ...(userConfig.feedback.feedbackURL5 && {
        feedbackURL5: userConfig.feedback.feedbackURL5,
      }),
      ...(userConfig.feedback.feedbackURL5Label && {
        feedbackURL5Label: userConfig.feedback.feedbackURL5Label,
      }),
    };

    const config = {
      ...(title && { title }),
      ...(Object.keys(image).length && { image }),
      ...(Object.keys(content).length && { content }),
      ...(Object.keys(button).length && { button }),
      ...(Object.keys(link).length && { link }),
      ...(Object.keys(input).length && { input }),
      ...(userConfig.checkbox1 && { checkbox1: userConfig.checkbox1 }),
      ...(Object.keys(radio).length && { radio }),
      ...(Object.keys(feedback).length && { feedback }),
      sizes,
      position,
      color,
      ...(device && { device }),
      afterSeconds: afterSeconds || 0,
      afterScroll: afterScroll || 0,
      trafficSource: trafficSource || "",
      ...(webhookUrl && { webhookUrl }),
    };

    const embedCode = `<script type="text/javascript" src="${
      process.env.NEXT_PUBLIC_API_URL
    }/dist/${entry}.js"></script><script>window.MyModal.init(${JSON.stringify(
      config
    )});</script>`
      .replace(/\s\s+/g, " ")
      .trim();

    // DEVELOPMENT
    // Trigger webpack build
    if (process.env.NEXT_PUBLIC_API_URL === "http://localhost:3000") {
      const webpackPath = path.resolve(process.cwd(), "webpack.config.js");
      console.log(`Webpack path: ${webpackPath}`);

      // Promise-based build to run Webpack
      const buildResult = await new Promise<{ stdout: string; stderr: string }>(
        (resolve, reject) => {
          const entry = userConfig.entry || "";
          exec(
            `npx webpack --config ${webpackPath} --env entry=${entry}`,
            (error, stdout, stderr) => {
              if (error) {
                reject(error);
                return;
              }
              resolve({ stdout, stderr });
            }
          );
        }
      );

      console.log("Webpack build completed.");
      console.log("stdout:", buildResult.stdout);

      if (buildResult.stderr) {
        console.error("stderr:", buildResult.stderr);
      }
    }
    // DEVELOPMENT

    // Embed code
    return NextResponse.json({
      embedCode: embedCode,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
