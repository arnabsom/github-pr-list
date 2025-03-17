// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(js|ts|tsx)$': 'ts-jest'
  },
  transformIgnorePatterns: [
'/node_modules/(?!your-module-name).+\\.js$',
],
  testMatch: ['**/__tests__/**/*.(test|spec).(ts|tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^@/(.*)$': "/node_modules/(?!lodash-es/.*)"
  }
};
