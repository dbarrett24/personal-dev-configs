const baseConfig = require('@yourname/jest-config');

module.exports = {
    ...baseConfig,
    displayName: 'react-vite-template',
    testEnvironment: 'jsdom',
};

