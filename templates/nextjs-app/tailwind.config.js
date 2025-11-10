const baseConfig = require('@yourname/theme-system/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...baseConfig,
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};

