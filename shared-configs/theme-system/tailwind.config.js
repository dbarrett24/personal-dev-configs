const { baseTheme } = require('./dist/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            colors: baseTheme.colors,
            spacing: baseTheme.spacing,
            borderRadius: baseTheme.borderRadius,
            fontSize: baseTheme.fontSize,
        },
    },
    plugins: [],
};

