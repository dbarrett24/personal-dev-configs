const baseConfig = require('@dbarrett24/jest-config-library/jest.config');

module.exports = {
    ...baseConfig,
    displayName: 'core-components',
    // Ignore dist folder
    testPathIgnorePatterns: [...(baseConfig.testPathIgnorePatterns || []), '/dist/'],
    // Exclude generated icons from coverage requirements (they're auto-generated)
    // Also exclude data-only files like importedIcons.ts (just an array export)
    // Button pre-existed DS-18 and will be improved in future tickets
    collectCoverageFrom: [
        ...baseConfig.collectCoverageFrom,
        '!src/Icons/generatedIcons/**',
        '!src/Icons/socialIcons/**',
        '!src/Icons/importedIcons.ts',
        '!src/Button/**', // Pre-existing, not part of DS-18
    ],
    // Strict thresholds for DS-18 code (Icons + LoadingSpinner)
    coverageThreshold: {
        global: {
            branches: 95,
            functions: 100,
            lines: 95,
            statements: 95,
        },
    },
};
