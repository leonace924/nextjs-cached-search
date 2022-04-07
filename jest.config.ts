import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  testRegex: '.test.(ts|tsx)$',
  //testPathIgnorePatterns: '__mocks__',

  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
};

module.exports = createJestConfig(customJestConfig);
