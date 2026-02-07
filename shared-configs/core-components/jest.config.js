const baseConfig = require('@dbarrett24/jest-config-library/jest.config');

module.exports = {
    ...baseConfig,
    displayName: 'core-components',
    // Ignore dist folder
    testPathIgnorePatterns: [...(baseConfig.testPathIgnorePatterns || []), '/dist/'],
};
