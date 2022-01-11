module.exports = {
  presets: [
    [
      "@babel/preset-env"
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime", { // 启用polyfill，按需加载，并提供沙箱机制，可以避免编译后的代码中出现重复的帮助程序，有效减少包体积
        corejs: 3
      }
    ]
  ]
};