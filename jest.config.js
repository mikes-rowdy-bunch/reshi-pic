const path = require('path');

module.exports = {
  rootDir: '.',
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}'
  ],
  setupFilesAfterEnv: [
    path.resolve(__dirname, 'src/setupTests.ts'),
    path.resolve(__dirname, 'jest.setup.js'),
  ],
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': ['babel-jest', { configFile: './babel.config.js' }],
    '^.+\.(bmp|gif|jpg|jpeg|png|webp|svg)$': path.resolve(__dirname, 'fileTransformer.js'),
  },
  moduleNameMapper: {
    '\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@backstage/core-plugin-api|@backstage/core-components|@backstage/theme|@backstage/version-bridge)/).+\.js$'
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
};
