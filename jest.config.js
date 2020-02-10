module.exports = {
  collectCoverageFrom: [
    '!app/common/utils/images.js',
    '!app/common/TU/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/global-styles.js',
    '!app/*/*/Loadable.{js,jsx}',
    '!app/reducers.js',

    'app/**/reducers/*.js',
    'app/**/actions/*.js',
    'app/**/selectors/*.js',
    'app/**/setters/*.js',
    'app/**/hooks/*.js',
    'app/**/utils/*.js',
    'app/**/sagas/*.js',

    '!app/**/reducers/index.js',
    '!app/**/actions/index.js',
    '!app/**/selectors/index.js',
    '!app/**/setters/index.js',
    '!app/**/hooks/index.js',
    '!app/**/utils/index.js',
    '!app/**/sagas/index.js',

    'app/**/actions.js',
    'app/**/reducer.js',
    'app/**/selectors.js',
    'app/**/setters.js',
    'app/**/hooks.js',
    'app/**/utils.js',
    'app/**/saga.js',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
  },
  setupFilesAfterEnv: [
    '<rootDir>/internals/testing/test-bundler.js',
    'react-testing-library/cleanup-after-each',
    '<rootDir>setupTests.js',
  ],
  setupFiles: ['raf/polyfill'],
  testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: [],
}
