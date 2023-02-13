const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 运行完成后，直接打开浏览器
  devServer: {
    open: true,
    // host: "localhost",
  },
});
