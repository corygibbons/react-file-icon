const babel = require('rollup-plugin-babel');

export default {
  input: 'src/components/index.js',
  output: {
    file: 'dist/main.js',
    format: 'cjs'
  },
  external: ['lodash.uniqueid', 'prop-types', 'react', 'tinycolor2'],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
