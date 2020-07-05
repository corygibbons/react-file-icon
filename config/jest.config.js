module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '\\.js$': ['babel-jest', { configFile: './config/babel.config.js' }],
  },
  roots: ['../'],
};
