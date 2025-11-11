import { makeConfig } from '@yourname/tsup-config';

export default makeConfig(
    // Server-safe entries
    {
        index: 'src/index.ts',
    },
    // Client component entries (gets 'use client' prepended)
    {
        button: 'src/components/Button.tsx',
    },
    // Additional options
    {
        external: ['react', 'react-dom', '@yourname/theme-system'],
        splitting: false,
    }
);

