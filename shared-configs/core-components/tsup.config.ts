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
        'Icons/CreditCardIcon': 'src/Icons/CreditCardIcon/CreditCardIcon.tsx',
        LoadingSpinner: 'src/LoadingSpinner/LoadingSpinner.tsx',
        'Typography/Text': 'src/Typography/Text/Text.tsx',
        ...socialIcons,
    },
    {
        // Client-side components that need 'use client' directive
        Button: 'src/Button/Button.tsx',
        'Typography/Links': 'src/Typography/Links/Links.tsx',
        'Typography/InlineButton': 'src/Typography/InlineButton/InlineButton.tsx',
    }
);
