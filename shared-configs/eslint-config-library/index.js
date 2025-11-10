module.exports = {
    extends: ['@yourname/eslint-config'],
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true,
    },
    rules: {
        // Library-specific rules

        // Stricter for published libraries
        '@typescript-eslint/no-explicit-any': 'error',

        // Ensure proper exports
        'import/no-default-export': 'error',

        // No console statements in library code
        'no-console': 'error',
    },
    overrides: [
        {
            // Allow default exports in test and story files
            files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx'],
            rules: {
                'import/no-default-export': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                'no-console': 'off',
            },
        },
    ],
};

