module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-flow",
    ],
    plugins: [
      "babel-plugin-styled-components",
      "@babel/plugin-proposal-class-properties",
    ],
  };
};
