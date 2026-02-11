const baseConfig = require('@dbarrett24/theme-system/tailwind.config');
const { themePlugin } = require('@dbarrett24/theme-system');

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [baseConfig],
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    plugins: [themePlugin],
};
