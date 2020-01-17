const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader"
        ]
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
    new webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : ""
      },
      hash: true // 정적 파일을 불러올때 쿼리문자열에 웹팩 해쉬값을 추가한다
    }),
    new CleanWebpackPlugin()
    // development에서는 불필요해서 사용하지 않는다.
    // loader도 있어서 loader에서 사용해도 된다.
    // ...(process.env.NODE_ENV === "production"
    //   ? [new MiniCssExtractPlugin({ filename: `[name].css?[hash]` })]
    //   : [])
  ]
};
