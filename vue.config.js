const webpack = require('webpack');

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        return {
          ...options,
          name: 'documents/[name].[ext]',
        };
      });

    // Ajouter le plugin DefinePlugin avec chainWebpack
    config
      .plugin('define')
      .use(webpack.DefinePlugin, [{
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
      }]);
  }
};
