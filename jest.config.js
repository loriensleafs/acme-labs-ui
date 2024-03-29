module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['tests/**/*.{ts,tsx,js,jsx}'],
  transform: { '.(ts|tsx)$': 'ts-jest/dist' },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
}
