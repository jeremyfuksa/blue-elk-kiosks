const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: ['scss'],
  modify: (config, { target, dev }, webpack) => {
    // For development, use style-loader instead of MiniCssExtractPlugin
    if (dev) {
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      });
    } else {
      // For production, use MiniCssExtractPlugin
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: '[name].css',
        })
      );

      config.module.rules.push({
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      });
    }

    return config;
  },
};
