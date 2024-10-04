// netlify/functions/generate-modal.ts
import { Handler } from "@netlify/functions";
import { exec } from "child_process";
import path from "path";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const userConfig = JSON.parse(event.body || "{}");
    const embedCode = generateEmbedCode(userConfig);

    await triggerWebpackBuild(userConfig.entry);

    return {
      statusCode: 200,
      body: JSON.stringify({ embedCode }),
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Internal Server Error" }),
    };
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generateEmbedCode(config: any) {
  return `
    <script type="text/javascript" src="/dist/script.js"></script>
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

export { handler };
