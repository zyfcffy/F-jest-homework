module.exports = {
  presets: ["@babel/preset-env", "airbnb"],
  plugins: ["@babel/plugin-proposal-class-properties"],
  env: {
    test: {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
    },
  },
};
