const {resolve} = require('path');
const {config: dotenvConfig} = require('dotenv');

const root = process.cwd();

dotenvConfig({path: resolve(root, '..', '.env.test')});

const envString = Object.entries({...process.env})
  .map(([key, value]) => `${key}=${value}`)
  .join(';');

module.exports = (wallaby) => ({
  files: ['!src/**/*spec.ts', 'src/**/*.ts', 'jest.config.js'],
  tests: ['src/**/*.spec.ts'],
  debug: true,
  testFramework: 'jest',
  env: {
    type: 'node',
    runner: 'node',
    params: {
      env: envString,
    },
  },
  setup: function (wallaby) {
    const jestConfig = require('./jest.config');
    jestConfig.rootDir = '.';
    jestConfig.moduleNameMapper = {
      '^src/(.*)': '<rootDir>/src/$1',
    };
    wallaby.testFramework.configure(jestConfig);
  },
  workers: {
    initial: 1,
    regular: 1,
    recycle: true,
  },
});
