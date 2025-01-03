const path = require('path');

module.exports = {
  default: {
    require: ['tests/e2e/steps/**/*.ts', 'tests/e2e/support/**/*.ts'],
    format: [
      'progress',
      '@cucumber/pretty-formatter',
      path.resolve('./tests/e2e/support/allure-reporter')
    ],
    paths: ['tests/e2e/features/**/*.feature'],
    requireModule: ['ts-node/register'],
    worldParameters: {
      timeout: 60000
    }
  }
}; 