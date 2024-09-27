// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/app/components/modal/Templates/Template1.tsx",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "/dist/", // Public path ayarı
    library: {
      name: "MyModal",
      type: "window", // veya "var" ya da "commonjs2"
    },
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
