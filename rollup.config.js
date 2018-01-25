const babel = require('rollup-plugin-babel');

export default {
  input: 'src/components/index.js',
  output: {
    file: 'dist/main.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
