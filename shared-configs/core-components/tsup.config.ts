import { makeConfig } from '@dbarrett24/tsup-config';

export default makeConfig(
    {
        index: 'src/index.ts',
    },
    {
        // Client-side components that need 'use client' directive
        Button: 'src/Button/Button.tsx',
        Input: 'src/Input/Input.tsx',
    }
);
