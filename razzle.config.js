const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: ['scss'],
  modifyWebpackConfig({
    env: {
      target, // the target 'node' or 'web'
      dev, // is this a development build? true or false
    },
    webpackConfig, // the created webpack config
    webpackObject, // the imported webpack node module
    options,
    paths, // the modified paths that will be used by Razzle.
  }) {
    if (dev) {
      webpackConfig.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      });
    } else {
      webpackConfig.plugins.push(
        new MiniCssExtractPlugin({
          filename: '[name].css',
        })
      );
      
      webpackConfig.module.rules.push({
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      });
    }

    return webpackConfig;
  },
};
