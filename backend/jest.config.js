module.exports = {
  // Specifies the test environment that will be used for testing
  testEnvironment: 'node',

  // Sets a global timeout for all tests
  testTimeout: 10000,

  // Automatically clear mock calls, instances, contexts, and results before every test
  clearMocks: true,

  // Indicates whether each individual test should be reported during the run
  verbose: true,

  // Adds global setup and teardown scripts to handle database connections or other initialization
  globalSetup: '<rootDir>/tests/setup.js',
  globalTeardown: '<rootDir>/tests/teardown.js',

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: ['json', 'lcov', 'text', 'clover'],

  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/tests'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  // This option allows the use of a custom test runner
  testRunner: 'jest-circus/runner',

  // Use this configuration option to add custom reporters to Jest
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './reports/junit', outputName: 'js-test-results.xml' }]
  ],

  // Transform files using Babel
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
};

module.exports = {
  testEnvironment: 'node',
  testTimeout: 10000,
  globalSetup: './tests/setup.js',
  globalTeardown: './tests/teardown.js',
};
