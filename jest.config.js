// jest.config.js
module.exports = {
    // Enable verbose mode for test result output
    verbose: true,
    reporters: [
        'default',
        ['jest-ctrf-json-reporter', {}],
    ],
  };
  