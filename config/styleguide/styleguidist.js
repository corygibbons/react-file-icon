const path = require('path');
const { createConfig, babel } = require('webpack-blocks');

module.exports = {
  components: '../../src/components/*.js',
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import ${name} from 'react-file-icon';`;
  },
  serverPort: 8080,
  showSidebar: false,
  showUsage: true,
  skipComponentsWithoutExample: true,
  styleguideDir: '../../public',
  template: './index.html',
  title: 'React File Icon',
  webpackConfig: createConfig([babel()])
};
