const { createConfig, babel } = require('webpack-blocks');

module.exports = {
  components: '../../src/components/*.js',
  serverPort: 8080,
  showSidebar: false,
  showUsage: true,
  skipComponentsWithoutExample: true,
  styleguideDir: '../../public',
  template: './index.html',
  title: 'React File Icon',
  webpackConfig: createConfig([babel()])
};
