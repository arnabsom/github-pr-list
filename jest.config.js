// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-babel', // Use ts-jest preset with Babel
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.json' }], // Tell Jest to use ts-jest for TypeScript and JSX
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
