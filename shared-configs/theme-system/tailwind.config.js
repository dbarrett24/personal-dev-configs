const { baseTheme } = require('./dist/theme');
const { themePlugin } = require('./dist/tailwind-plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: baseTheme.colors,
            fontFamily: baseTheme.fontFamily,
            spacing: baseTheme.spacing,
            borderRadius: baseTheme.borderRadius,
            fontSize: baseTheme.fontSize,
        },
    },
    plugins: [themePlugin],
};

