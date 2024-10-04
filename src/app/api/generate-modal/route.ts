/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";

export async function POST(request: Request) {
  try {
    const userConfig = await request.json();
    const embedCode = generateEmbedCode(userConfig);

    await triggerWebpackBuild(userConfig.entry);

    return NextResponse.json({ embedCode });
  } catch (error: any) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

function generateEmbedCode(config: any) {
  return `
    <script type="text/javascript" src="http://localhost:3000/dist/script.js"></script>
    <script>
      window.MyModal.init({
        title: "${config.title}",
        ${config.logo ? `logo: "${config.logo}",` : ""}
        ${config.imageUrl ? `imageUrl: "${config.imageUrl}",` : ""}
        contents: { content1: "${config.contents.content1}" },
        ${
          config.inputs?.placeholder
            ? `placeholder: "${config.inputs.placeholder}",`
            : ""
        }
        buttons: {
          button1: "${config.buttons.button1}",
          button2: "${config.buttons.button2}",
        },
        sizes: "${config.sizes}",
        color: { background: "${config.color.background}", text: "${
    config.color.text
  }" },
      });
    </script>`
    .replace(/\s\s+/g, " ")
    .trim();
}

async function triggerWebpackBuild(entry: string) {
  const webpackPath = path.resolve(process.cwd(), "webpack.config.js");
  console.log(`Webpack path: ${webpackPath}`);

  return new Promise<void>((resolve, reject) => {
    exec(
      `npx webpack --config ${webpackPath} --env entry=${entry}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Webpack error: ${stderr}`);
          reject(error);
          return;
        }
        console.log(stdout);
        resolve();
      }
    );
  });
}
