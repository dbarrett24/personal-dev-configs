const baseConfig = require('@dbarrett24/jest-config');

module.exports = {
    ...baseConfig,
    displayName: 'react-vite-template',
    testEnvironment: 'jsdom',
};

