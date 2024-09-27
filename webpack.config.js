// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/app/components/modal/Templates/Template1.tsx",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "dist"),
    library: "MyModal", // Global değişken adı (isteğe bağlı)
    libraryTarget: "umd", // Kütüphane hedefi
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Tailwind CSS için
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Resimler için
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
