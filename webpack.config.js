const path = require("path");
const webpack = require("webpack");

// const Myplugin = require("./myplugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist")
  },
  module: {
    rules: [
      {
        // test: /\.js$/, // .js 확장자로 끝나는 모든 파일
        // use: [path.resolve("./myloader.js")] // 방금 만든 로더를 적용한다
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/", // prefix를 아웃풋 경로로 지정
          name: "[name].[ext]?[hash]", // 파일명 형식
          limit: 200000 // 2kb
        }
      }
    ]
  },
  plugins: [
    // new Myplugin(),
    new webpack.BannerPlugin({
      banner: () => `빌드 날짜: ${new Date().toLocaleString()}`
    }),
    // string을 보낼 때는 JSON.stringfy로 감싸서 한다.
    new webpack.DefinePlugin({})
  ]
};
