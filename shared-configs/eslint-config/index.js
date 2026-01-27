// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
    extends: [
        'turbo',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/strict',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
        'plugin:jest-dom/recommended',
        'plugin:typescript-sort-keys/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'jsx-a11y',
        'jest',
        'jest-dom',
        'jest-formatting',
        'testing-library',
        'import',
        'sort-destructure-keys',
        'sort-keys',
    ],
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
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
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
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/consistent-generic-constructors': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',

        // React specific rules
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/display-name': 'warn',
        'react/jsx-boolean-value': 'error',
        'react/jsx-curly-brace-presence': 'error',
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
        'react/jsx-sort-props': ['error', { ignoreCase: true }],
        'react/no-danger': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error',

        // Import rules
        'import/order': [
            'error',
            {
                groups: [],
                'newlines-between': 'never',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'import/no-duplicates': 'error',
        'import/no-absolute-path': 'error',
        'import/no-self-import': 'error',
        'import/no-useless-path-segments': 'error',
        'import/newline-after-import': ['error', { considerComments: true, count: 1 }],

        // Sorting rules
        'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
        'sort-keys': 'off',
        'sort-keys/sort-keys-fix': ['error', 'asc', { caseSensitive: false }],

        // Jest formatting rules
        'jest-formatting/padding-around-after-all-blocks': 'error',
        'jest-formatting/padding-around-after-each-blocks': 'error',
        'jest-formatting/padding-around-before-all-blocks': 'error',
        'jest-formatting/padding-around-before-each-blocks': 'error',
        'jest-formatting/padding-around-describe-blocks': 'error',
        'jest-formatting/padding-around-test-blocks': 'error',

        // Jest/Testing rules
        'jest/expect-expect': 'off',
        'jest/prefer-to-have-length': 'error',
        'jest/no-commented-out-tests': 'off',

        // A11y rules
        'jsx-a11y/accessible-emoji': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': 'error',
        'jsx-a11y/heading-has-content': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-redundant-roles': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',

        // General code quality
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'prefer-const': 'error',
        'no-var': 'error',
        eqeqeq: ['error', 'always'],
        curly: ['error', 'all'],
        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'no-param-reassign': 'error',
        'no-duplicate-imports': 'error',
        'no-template-curly-in-string': 'error',
        'no-restricted-globals': ['error'].concat(restrictedGlobals),

        // Prevent common issues
        'no-restricted-syntax': [
            'error',
            {
                selector: 'MemberExpression[object.name="jest"][property.name="clearAllMocks"]',
                message:
                    'Do not use jest.clearAllMocks(); this is automated via jest.config.ts with clearMocks: true',
            },
            {
                selector: 'MemberExpression[object.name="jest"][property.name=/^(resetAllMocks|restoreAllMocks)$/]',
                message:
                    'Prefer to not use jest.resetAllMocks() or jest.restoreAllMocks(); properly composed tests should only need clearAllMocks() which is automatically run after each test.',
            },
        ],

        // Turbo
        'turbo/no-undeclared-env-vars': 'off',
    },
    overrides: [
        {
            // Test files
            files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
            extends: ['plugin:testing-library/react'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
                'prefer-const': 'off',
                'testing-library/no-node-access': 'error',
                'testing-library/no-await-sync-events': 'error',
                'testing-library/no-global-regexp-flag-in-query': 'error',
                'testing-library/no-manual-cleanup': 'error',
                'testing-library/prefer-explicit-assert': 'error',
                'testing-library/prefer-user-event': 'error',
                'testing-library/render-result-naming-convention': 'off',
            },
            settings: {
                'testing-library/utils-module': 'testing',
            },
        },
    ],
};
