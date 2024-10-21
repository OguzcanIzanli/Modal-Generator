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
      image,
      content,
      button,
      link,
      input,
      radio,
      feedback,
      sizes,
      color,
      position,
      device,
      afterSeconds,
      afterScroll,
      trafficSource,
      webhookUrl,
    } = userConfig;

    const embedCode = `<script type="text/javascript" src="${
      process.env.NEXT_PUBLIC_API_URL
    }/dist/${entry}.js"></script>
    <script>
    window.MyModal.init({
      ${title ? `title: "${title}",` : ""}
       ${
         image.logoUrl || image.imageUrl
           ? `image: {
          ${image.logoUrl ? `logoUrl: "${image.logoUrl}"` : ""}
          ${image.imageUrl ? `, imageUrl: "${image.imageUrl}"` : ""}
          },`
           : ""
       }
      ${
        content.content1 || content.content2
          ? `content: {
          ${content.content1 ? `content1: "${content.content1}"` : ""}
          ${content.content2 ? `, content2: "${content.content2}"` : ""}
          ${content.content3 ? `, content3: "${content.content3}"` : ""}},`
          : ""
      }
      ${
        button.buttonAnchor ||
        button.buttonAnchor2 ||
        button.buttonAnchor3 ||
        button.button2
          ? `button: {
        ${button.buttonAnchor ? `buttonAnchor: "${button.buttonAnchor}"` : ""}
        ${
          button.buttonAnchorLink
            ? `, buttonAnchorLink: "${button.buttonAnchorLink}"`
            : ""
        }
        ${
          button.buttonAnchor2
            ? `, buttonAnchor2: "${button.buttonAnchor2}"`
            : ""
        }
        ${
          button.buttonAnchorLink2
            ? `, buttonAnchorLink2: "${button.buttonAnchorLink2}"`
            : ""
        }
        ${
          button.buttonAnchor3
            ? `, buttonAnchor3: "${button.buttonAnchor3}"`
            : ""
        }
        ${
          button.buttonAnchorLink3
            ? `, buttonAnchorLink3: "${button.buttonAnchorLink3}"`
            : ""
        } 
        ${button.button2 ? `, button2: "${button.button2}"` : ""}},`
          : ""
      }
      ${
        link.link1 || link.link2
          ? `link: {
          ${link.link1 ? `link1: "${link.link1}"` : ""} 
          ${link.linkURL1 ? `, linkURL1: "${link.linkURL1}"` : ""}
          ${link.link2 ? `, link2: "${link.link2}"` : ""} 
          ${link.linkURL2 ? `, linkURL2: "${link.linkURL2}"` : ""}},`
          : ""
      }
      ${
        input.name || input.email || input.phone
          ? `input: {
          ${input.name ? `name: "${input.name}"` : ""}
          ${input.email ? `, email: "${input.email}"` : ""}
          ${input.phone ? `, phone: "${input.phone}"` : ""}
          },`
          : ""
      }
      ${userConfig.checkbox1 ? `checkbox1: "${userConfig.checkbox1}",` : ""}
      ${
        radio.label1 || radio.label2 || radio.label3
          ? `radio: {
        ${radio.label1 ? `label1: "${radio.label1}"` : ""}
        ${radio.label1b ? `, label1b: "${radio.label1b}"` : ""}
        ${radio.label2 ? `, label2: "${radio.label2}"` : ""}
        ${radio.label2b ? `, label2b: "${radio.label2b}"` : ""}
        ${radio.label3 ? `, label3: "${radio.label3}"` : ""}
        ${radio.label3b ? `, label3b: "${radio.label3b}"` : ""}},`
          : ""
      }
      ${
        feedback.feedbackURL1 ||
        feedback.feedbackURL2 ||
        feedback.feedbackURL3 ||
        feedback.feedbackURL4 ||
        feedback.feedbackURL5
          ? `feedback: {
        ${
          feedback.feedbackURL1
            ? `feedbackURL1: "${feedback.feedbackURL1}"`
            : ""
        }
        ${
          feedback.feedbackURL1Label
            ? `, feedbackURL1Label: "${feedback.feedbackURL1Label}"`
            : ""
        }
        ${
          feedback.feedbackURL2
            ? `, feedbackURL2: "${feedback.feedbackURL2}"`
            : ""
        }
        ${
          feedback.feedbackURL2Label
            ? `, feedbackURL2Label: "${feedback.feedbackURL2Label}"`
            : ""
        }
        ${
          feedback.feedbackURL3
            ? `, feedbackURL3: "${feedback.feedbackURL3}"`
            : ""
        }
        ${
          feedback.feedbackURL3Label
            ? `, feedbackURL3Label: "${feedback.feedbackURL3Label}"`
            : ""
        }
         ${
           feedback.feedbackURL4
             ? `, feedbackURL4: "${feedback.feedbackURL4}"`
             : ""
         }
        ${
          feedback.feedbackURL4Label
            ? `, feedbackURL4Label: "${feedback.feedbackURL4Label}"`
            : ""
        }
        ${
          feedback.feedbackURL5
            ? `, feedbackURL5: "${feedback.feedbackURL5}"`
            : ""
        }
        ${
          feedback.feedbackURL5Label
            ? `, feedbackURL5Label: "${feedback.feedbackURL5Label}"`
            : ""
        }
        },`
          : ""
      }
      sizes: "${sizes}",
      position: { position: "${position.position}", slide: "${
      position.slide
    }" },
      color: { background: "${color.background}", borderColor: "${
      color.borderColor
    }", text: "${color.text}", ${
      color.textBg ? `textBg: "${color.textBg}",` : ""
    } },
      ${device ? `device: "${device}",` : ""}
      ${afterSeconds ? `afterSeconds: ${afterSeconds},` : `afterSeconds: 0,`}
      ${afterScroll ? `afterScroll: ${afterScroll},` : `afterScroll: 0,`}
      trafficSource: "${trafficSource}",
      ${webhookUrl ? `webhookUrl: "${webhookUrl}",` : ""}
    });
    </script>`
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
