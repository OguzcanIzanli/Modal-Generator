import { NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";
export async function POST(request: Request) {
  try {
    const userConfig = await request.json();
    console.log("Received userConfig:", userConfig);

    const embedCode =
      `<script type="text/javascript" src="http://localhost:3000/dist/template${
        userConfig.entry
      }.js"></script>
    <script>
    window.MyModal.init({
      title: "${userConfig.title}",
      ${userConfig.logoUrl ? `logo: "${userConfig.logoUrl}",` : ""}
      ${userConfig.imageUrl ? `imageUrl: "${userConfig.imageUrl}",` : ""}
      content1: "${userConfig.content1}",
      ${
        userConfig.inputs.placeholder
          ? `inputs: { placeholder: "${userConfig.inputs?.placeholder}" },`
          : ""
      }
      button1: "${userConfig.button1}",
      button2: "${userConfig.button2}",
      sizes: "${userConfig.sizes}",
      ${
        userConfig.position
          ? `position: "${userConfig.position}",`
          : `position: "bottom-5 right-5",`
      }
      color: { background: "${userConfig.color.background}", text: "${
        userConfig.color.text
      }" },
    });
    </script>`
        .replace(/\s\s+/g, " ")
        .trim();

    // DEVELOPMENT
    // Trigger webpack build
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
