module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'mjs', 'json', 'node'],
  testMatch: ['**/unit_tests/**/*.test.mjs'],
  transform: {
    '^.+\\.mjs$': 'babel-jest', // Use Babel to transform .mjs files
  },
};