export default {
    singleQuote: true,
    tabWidth: 4,
    semi: true,
    trailingComma: 'es5',
    printWidth: 120,
    endOfLine: 'auto',
    arrowParens: 'always',
    singleAttributePerLine: true,
    plugins: ['prettier-plugin-tailwindcss'],
    // Intentionally, we don't add `classnames` or `clsx`.
    // If tailwind is involved, we want to use `cn` _just in case_.
    tailwindFunctions: ['cn'],
};

