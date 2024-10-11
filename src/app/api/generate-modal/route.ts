import { NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";

export async function POST(request: Request) {
  try {
    const userConfig = await request.json();
    console.log("Received userConfig:", userConfig); // modal data from embed code generator

    const embedCode = `<script type="text/javascript" src="${
      process.env.NEXT_PUBLIC_API_URL
    }/dist/template${userConfig.entry}.js"></script>
    <script>
    window.MyModal.init({
      ${userConfig.title ? `title: "${userConfig.title}",` : ""}
      ${userConfig.logoUrl ? `logoUrl: "${userConfig.logoUrl}",` : ""}
      ${userConfig.imageUrl ? `imageUrl: "${userConfig.imageUrl}",` : ""}
      ${userConfig.content1 ? `content1: "${userConfig.content1}",` : ""}
      ${userConfig.content2 ? `content2: "${userConfig.content2}",` : ""}
      ${
        userConfig.buttonAnchor
          ? `buttonAnchor: "${userConfig.buttonAnchor}",`
          : ""
      }
      ${
        userConfig.buttonAnchorLink
          ? `buttonAnchorLink: "${userConfig.buttonAnchorLink}",`
          : ""
      }
           ${
             userConfig.buttonAnchor2
               ? `buttonAnchor2: "${userConfig.buttonAnchor2}",`
               : ""
           }
      ${
        userConfig.buttonAnchorLink2
          ? `buttonAnchorLink2: "${userConfig.buttonAnchorLink2}",`
          : ""
      }
      ${userConfig.button2 ? `button2: "${userConfig.button2}",` : ""}
      ${userConfig.input1 ? `input1: "${userConfig.input1}",` : ""}
      ${userConfig.input2 ? `input2: "${userConfig.input2}",` : ""}
      ${userConfig.checkbox1 ? `checkbox1: "${userConfig.checkbox1}",` : ""}
      ${userConfig.label1 ? `label1: "${userConfig.label1}",` : ""}
      ${userConfig.label1b ? `label1b: "${userConfig.label1b}",` : ""}
      ${userConfig.label2 ? `label2: "${userConfig.label2}",` : ""}
      ${userConfig.label2b ? `label2b: "${userConfig.label2b}",` : ""}
      ${userConfig.label3 ? `label3: "${userConfig.label3}",` : ""}
      ${userConfig.label3b ? `label3b: "${userConfig.label3b}",` : ""}
      sizes: "${userConfig.sizes}",
        position: { position: "${userConfig.position.position}", slide: "${
      userConfig.position.slide
    }" },
      color: { background: "${userConfig.color.background}", borderColor: "${
      userConfig.color.borderColor
    }", text: "${userConfig.color.text}" },
      ${userConfig.device ? `device: "${userConfig.device}",` : ""}
      ${
        userConfig.afterSeconds
          ? `afterSeconds: ${userConfig.afterSeconds},`
          : `afterSeconds: 0,`
      }
      ${
        userConfig.afterScroll
          ? `afterScroll: ${userConfig.afterScroll},`
          : `afterScroll: 0,`
      }
      trafficSource: "${userConfig.trafficSource}",
      ${userConfig.webhookUrl ? `webhookUrl: "${userConfig.webhookUrl}",` : ""}
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
