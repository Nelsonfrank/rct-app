const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',
              '@layout-sider-background': '#313e50',
              '@menu-dark-bg': '@layout-sider-background',
              '@layout-trigger-background':
                'darken(@layout-sider-background, 20%)',
              '@link-color': '@layout-sider-background',
              '@link-hover-color': '@primary-color',
              '@link-active-color': '@primary-color',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
