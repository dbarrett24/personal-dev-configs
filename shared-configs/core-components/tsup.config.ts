import { makeConfig } from '@dbarrett24/tsup-config';

// Social icons (hand-crafted SVGs for auth providers)
const socialIcons = Object.fromEntries(
    ['googleSocialIcon', 'facebookSocialIcon', 'appleSocialIcon'].map((icon: string) => [
        `Icons/socialIcons/${icon}`,
        `src/Icons/socialIcons/${icon}.tsx`,
    ])
);

export default makeConfig(
    {
        index: 'src/index.ts',
        'Icons/index': 'src/Icons/index.ts',
        'Icons/IconBase': 'src/Icons/IconBase.tsx',
        'Icons/anyIcon': 'src/Icons/anyIcon.ts',
        LoadingSpinner: 'src/LoadingSpinner/LoadingSpinner.tsx',
        ...socialIcons,
    },
    {
        // Client-side components that need 'use client' directive
        Button: 'src/Button/Button.tsx',
    }
);
