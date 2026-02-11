const baseConfig = require('@dbarrett24/theme-system/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    // Base config preset includes themePlugin with complete theme (colors, spacing, etc.)
    presets: [baseConfig],
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};
