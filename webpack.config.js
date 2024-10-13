/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");

module.exports = (env) => {
  const entryFile = `./src/app/components/modal/Templates/${env.entry}.tsx`;

  return {
    target: "web",
    mode: "production",
    entry: path.resolve(__dirname, entryFile),
    entry: entryFile,
    output: {
      filename: `${env.entry}.js`,
      path: path.resolve(__dirname, "public/dist"),
      umdNamedDefine: true,
      libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/, // For Tailwind CSS
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
  };
};
