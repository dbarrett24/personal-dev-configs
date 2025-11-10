module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y', 'jest', 'jest-dom', 'testing-library', 'import'],
    env: {
        browser: true,
        es2020: true,
        node: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
    rules: {
        // TypeScript specific rules
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',

        // React specific rules
        'react/react-in-jsx-scope': 'off', // Not needed with new JSX transform
        'react/prop-types': 'off', // Using TypeScript for prop types
        'react/jsx-uses-react': 'off',
        'react/display-name': 'warn',

        // Import rules
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/no-duplicates': 'error',

        // Jest/Testing rules
        'jest/expect-expect': 'off', // Allow Testing Library queries without explicit expect
        'testing-library/no-node-access': 'error', // Enforce Testing Library best practices

        // General code quality
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'prefer-const': 'error',
        'no-var': 'error',

        // Prevent common issues from work experience
        'no-restricted-syntax': [
            'error',
            {
                selector: 'MemberExpression[object.name="jest"][property.name="clearAllMocks"]',
                message:
                    'Do not use jest.clearAllMocks(); this is automated via jest.config.ts with clearMocks: true',
            },
        ],
    },
    overrides: [
        {
            // Test files
            files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
                'testing-library/no-node-access': 'error',
            },
        },
    ],
};

