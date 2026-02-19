import { makeConfig } from '@dbarrett24/tsup-config';

// Social icons (hand-crafted SVGs for auth providers)
const socialIcons = Object.fromEntries(
    ['googleSocialIcon', 'facebookSocialIcon', 'appleSocialIcon'].map((icon: string) => [
        `Icons/socialIcons/${icon}`,
        `src/Icons/socialIcons/${icon}.tsx`,
    ])
);

// Server-side entries (no React hooks, no client interactivity)
export const entries = {
    index: 'src/index.ts',
    'Icons/index': 'src/Icons/index.ts',
    'Icons/IconBase': 'src/Icons/IconBase.tsx',
    'Icons/anyIcon': 'src/Icons/anyIcon.ts',
    'Icons/CreditCardIcon': 'src/Icons/CreditCardIcon/CreditCardIcon.tsx',
    LoadingSpinner: 'src/LoadingSpinner/LoadingSpinner.tsx',
    'Typography/Text': 'src/Typography/Text/Text.tsx',
    ...socialIcons,
};

// Client-side entries (components with hooks, event handlers, or client interactivity)
export const clientEntries = {
    Button: 'src/Button/Button.tsx',
    'Typography/Links': 'src/Typography/Links/Links.tsx',
    'Typography/InlineButton': 'src/Typography/InlineButton/InlineButton.tsx',
    // Badge (uses useMemo → client-side)
    'Badge/Badge': 'src/Badge/Badge.tsx',
    'Badge/ItemBadge': 'src/Badge/ItemBadge.tsx',
    'Badge/AuctionBadge': 'src/Badge/AuctionBadge.tsx',
};

export default makeConfig(entries, clientEntries);
