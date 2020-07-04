module.exports = {
  transform: {
    '\\.js$': ['babel-jest', { configFile: './config/babel.config.js' }],
  },
  roots: ['../'],
};
