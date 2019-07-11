const withTypescript = require('@zeit/next-typescript');
const withCSS = require('next-typed-css');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript(withCSS({
  tsCssModules: true,
  cssLoaderOptions: {
    namedExport: true
  },
  webpack(config, options) {
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())  
    return config
  }
}));