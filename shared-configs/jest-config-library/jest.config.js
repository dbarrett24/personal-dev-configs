const baseConfig = require('@yourname/jest-config');

module.exports = {
    ...baseConfig,

    // Collect coverage from src directory (library pattern)
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.stories.{js,jsx,ts,tsx}',
        '!src/**/__tests__/**',
        '!src/**/__mocks__/**',
        '!src/**/index.ts', // Often just re-exports
        '!src/**/types.ts', // Type-only files
    ],

    // Higher thresholds for libraries (published code should be well-tested)
    coverageThresholds: {
        global: {
            branches: 95,
            functions: 95,
            lines: 95,
            statements: 95,
        },
    },

    // Libraries typically don't have routing or pages
    testPathIgnorePatterns: [
        ...baseConfig.testPathIgnorePatterns,
        '/storybook-static/',
    ],

    // Display name for easier debugging in monorepos
    displayName: {
        name: 'library',
        color: 'blue',
    },
};

