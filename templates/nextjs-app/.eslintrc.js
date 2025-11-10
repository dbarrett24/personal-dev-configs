module.exports = {
    extends: ['@yourname/eslint-config'],
    plugins: ['@next/eslint-plugin-next'],
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

