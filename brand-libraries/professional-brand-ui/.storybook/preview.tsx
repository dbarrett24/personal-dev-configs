import type { Preview } from '@storybook/react';
import '../src/theme/styles.css';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#F8FAFC',
                },
                {
                    name: 'white',
                    value: '#FFFFFF',
                },
                {
                    name: 'dark',
                    value: '#1E3A8A',
                },
            ],
        },
    },
};

export default preview;

