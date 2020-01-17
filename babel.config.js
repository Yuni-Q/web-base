module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "79",
          ie: "11"
        },
        useBuiltIns: "usage", // 폴리필 사용 방식 지정
        corejs: {
          version: 2
        }
      }
    ]
  ]
};
