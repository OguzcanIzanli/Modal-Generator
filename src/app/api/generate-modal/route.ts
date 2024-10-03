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
    </script>`.trim();

    const singleLineEmbedCode = embedCode.replace(/\s\s+/g, " ").trim();

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

    // Embed code
    return NextResponse.json({
      embedCode: singleLineEmbedCode,
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

// // İstek gövdesini JSON olarak al
// const userConfig = await request.json();
// console.log("Received userConfig:", userConfig);

// // index.tsx dosyasının yolunu belirle
// const indexPath = path.resolve(process.cwd(), "src/index.tsx");

// // Kullanıcı ayarlarına bağlı olarak index.tsx içeriğini oluştur
// const indexContent = `
//   import React from 'react';
//   import ReactDOM from 'react-dom';
//   import Modal from './template';

//   const webhookUrl = "${userConfig.webhookUrl}";
//   // Diğer konfigürasyonlar burada eklenebilir

//   const App = () => <Modal webhookUrl={webhookUrl} />;

//   ReactDOM.render(<App />, document.getElementById('root'));
// `;

// // index.tsx dosyasını güncelle
// await fs.writeFile(indexPath, indexContent, "utf8");
// console.log("index.tsx güncellendi.");
