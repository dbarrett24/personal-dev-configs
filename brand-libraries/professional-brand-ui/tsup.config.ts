import { makeConfig } from '@dbarrett24/tsup-config';

export default makeConfig(
    // Server-safe entries
    {
        index: 'src/index.ts',
    },
    // Client component entries (gets 'use client' prepended)
    {
        Button: 'src/components/Button.tsx',
    },
    // Additional options
    {
        external: ['react', 'react-dom', '@dbarrett24/theme-system', '@dbarrett24/core-components'],
        splitting: false,
    }
);

