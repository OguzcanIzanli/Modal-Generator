import { NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";

export async function POST(request: Request) {
  try {
    const userConfig = await request.json();
    console.log("Received userConfig:", userConfig);

    const embedCode =
      `<script type="text/javascript" src="http://localhost:3000/dist/script.js"></script>
    <script>
    window.MyModal.init({
      title: "${userConfig.title}",
      ${userConfig.logo ? `logo: "${userConfig.logo}",` : ""}
      ${userConfig.imageUrl ? `imageUrl: "${userConfig.imageUrl}",` : ""}
      contents: { content1: "${userConfig.contents.content1}" },
      ${
        userConfig.inputs.placeholder
          ? `placeholder: "${userConfig.inputs?.placeholder}",`
          : ""
      }
        buttons: {
          button1: "${userConfig.buttons.button1}",
          button2: "${userConfig.buttons.button2}",
        },
        sizes: "${userConfig.sizes}",
        color: { background: "${userConfig.color.background}", text: "${
        userConfig.color.text
      }" },
    });
    </script>`
        .replace(/\s\s+/g, " ")
        .trim();

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
              console.error(`Webpack derleme hatası: ${stderr}`); // Hata log'u
              reject(error);
              return;
            }
            console.log(stdout); // Başarılı sonuç log'u
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
