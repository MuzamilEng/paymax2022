const withCSS = require("@zeit/next-css");
require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");

const withImages = require("next-images");
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {},
};
module.exports = {
  images: {
    loader: "akamai",
    path: "",
  },
};
module.exports = withCSS(
  withImages({
    inlineImageLimit: 16384,
    webpack(config, options) {
      config.plugins = config.plugins || [];
      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, ".env"),
          systemvars: true,
        }),
      ];
      return config;
    },
  })
);
