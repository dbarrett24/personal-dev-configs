const { themePlugin } = require('./dist/tailwind/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    plugins: [themePlugin],
};
