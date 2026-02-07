module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // Collect coverage from these directories
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.stories.{js,jsx,ts,tsx}',
        '!src/**/__tests__/**',
        '!src/**/__mocks__/**',
    ],

    // Coverage thresholds (90%+ from work experience)
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },

    // Test environment
    testEnvironment: 'jsdom',

    // Setup files
    setupFilesAfterEnv: ['<rootDir>/testing/setupTests.ts'],

    // Module name mapping for path aliases
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|less|scss|sass)$': '<rootDir>/testing/__mocks__/styleMock.js',
        '\\.(gif|png|jpg|jpeg|svg)$': '<rootDir>/testing/__mocks__/fileMock.js',
    },

    // Transform files with SWC (20-30x faster than Babel)
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    transform: {
                        react: {
                            runtime: 'automatic', // Use new JSX transform (no React import needed)
                        },
                    },
                },
            },
        ],
    },

    // Test match patterns
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],

    // Ignore patterns
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.next/', '/build/'],

    // Module file extensions
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

    // Collect coverage
    collectCoverage: false, // Enable with --coverage flag

    // Coverage directory
    coverageDirectory: 'coverage',

    // Don't reset mocks (clearMocks is enough)
    resetMocks: false,

    // Don't restore mocks
    restoreMocks: false,
};

