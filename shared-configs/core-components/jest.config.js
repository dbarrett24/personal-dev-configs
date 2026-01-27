const baseConfig = require('@dbarrett24/jest-config-library/jest.config');

module.exports = {
    ...baseConfig,
    displayName: 'core-components',
    // Fix the typo from jest-config-library
    coverageThreshold: baseConfig.coverageThresholds,
    coverageThresholds: undefined,
    // Ignore dist folder
    testPathIgnorePatterns: [...(baseConfig.testPathIgnorePatterns || []), '/dist/'],
};
