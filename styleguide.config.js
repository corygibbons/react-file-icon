const { createConfig, babel } = require('webpack-blocks');

module.exports = {
  components: 'src/components/**/*.jsx',
  serverPort: 8080,
  showUsage: true,
  title: 'React File Icons',
  webpackConfig: createConfig([babel()])
};
