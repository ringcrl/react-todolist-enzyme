module.exports = {
  verbose: true,
  modulePaths: ['<rootDir>/__test__/'],
  moduleNameMapper: {
    '.(css|scss)$': '<rootDir>/__test__/NullModule.js'
  },
  setupFilesAfterEnv: ['<rootDir>/__test__/setupTests.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
