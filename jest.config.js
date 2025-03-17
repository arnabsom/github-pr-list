// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(js|ts|tsx)$': ['ts-jest'
  ]
  },
  transformIgnorePatterns: [
  "\\node_modules\\@microsoft\\sp-dialog",
  "\\node_modules\\@microsoft\\sp-core-library",
  "node_modules/(?!sp-core-library)",
  "node_modules/(?!@microsoft/sp-core-library)"
],
  testMatch: ['**/__tests__/**/*.(test|spec).(ts|tsx)'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^@/(.*)$': "/node_modules/(?!lodash-es/.*)"
  }
};
