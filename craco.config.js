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
              // '@layout-header-background': '#001529',
              // '@layout-header-color': '#c7e429',
              // // '@layout-sider-background': '@layout-header-background',
              // '@layout-trigger-background': '#9ba6b8',
              // // '@layout-trigger-color': '@layout-header-color',
              // // Layout light theme
              // '@layout-sider-background-light': '#fff',
              // '@layout-trigger-background-light': '#fff',
              // '@layout-trigger-color-light': '#c7e429',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
