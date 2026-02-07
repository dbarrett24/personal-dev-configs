module.exports = {
    extends: ['@dbarrett24/eslint-config'],
    ignorePatterns: ['coverage/**', '*.config.js', '*.config.mjs', '.eslintrc.js', 'next-env.d.ts', '.next/**'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        // Add Next.js specific import restrictions
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'next/link',
                        message: 'Please use your custom Link wrapper instead.',
                    },
                ],
            },
        ],
    },
    root: true,
};
