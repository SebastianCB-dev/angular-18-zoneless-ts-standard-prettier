
const config = {
  preset: 'jest-preset-angular',
  testEnvironment: '@happy-dom/jest-environment',
  setupFilesAfterEnv: [
    '<rootDir>/setup-jest.ts'
  ],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1'
  }
}

export default config
