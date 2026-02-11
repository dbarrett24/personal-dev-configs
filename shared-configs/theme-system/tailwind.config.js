const { baseTheme } = require('./dist/theme');

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
    // NOTE: Plugins are NOT included in the base config
    // Consuming apps must load themePlugin separately:
    // const { themePlugin } = require('@dbarrett24/theme-system');
    // plugins: [themePlugin]
};

