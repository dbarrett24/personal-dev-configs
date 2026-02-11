import plugin from 'tailwindcss/plugin';

/**
 * Helper to wrap CSS variable names in var()
 */
const wrapVar = (cssVar: string) => `var(${cssVar})`;

/**
 * Custom Tailwind plugin for theme system utilities
 *
 * Class naming uses .hui-* prefix for consistency with modern design systems.
 * This enables seamless integration with third-party component libraries.
 *
 * Internal reference: Hammer UI patterns
 * Source: /Users/dbarr/Documents/Development/ATG/hammer-ui/packages/theme/src/tailwind/plugin.ts
 */
export const themePlugin = plugin(({ addComponents }) => {
    addComponents({
        // Focus Outline Utilities
        '.hui-focus-visible-outline': {
            '@apply focus-visible:outline focus-visible:outline-4 focus-visible:outline-border-focus':
                {},
        },
        '.hui-focus-visible-outline-inverse': {
            '@apply focus-visible:outline focus-visible:outline-4 focus-visible:outline-white': {},
        },

        // Typography Component Classes
        '.hui-text-h1': {
            fontFamily: wrapVar('--font-family-secondary'),
            fontSize: '32px',
            fontWeight: wrapVar('--font-weight-h1'),
            letterSpacing: wrapVar('--letter-spacing-h1'),
            lineHeight: '48px',
            // Responsive breakpoint for mobile
            '@media (max-width: 767px)': {
                fontSize: '24px',
                letterSpacing: wrapVar('--letter-spacing-h1-mobile'),
                lineHeight: '36px',
            },
        },
        '.hui-text-h2': {
            fontFamily: wrapVar('--font-family-secondary'),
            fontSize: '24px',
            fontWeight: wrapVar('--font-weight-h2'),
            letterSpacing: wrapVar('--letter-spacing-h2'),
            lineHeight: '36px',
            '@media (max-width: 767px)': {
                fontSize: '20px',
                letterSpacing: wrapVar('--letter-spacing-h2-mobile'),
                lineHeight: '30px',
            },
        },
        '.hui-text-h3': {
            fontFamily: wrapVar('--font-family-secondary'),
            fontSize: '20px',
            fontWeight: wrapVar('--font-weight-h3'),
            letterSpacing: wrapVar('--letter-spacing-h3'),
            lineHeight: '30px',
            '@media (max-width: 767px)': {
                fontSize: '16px',
                letterSpacing: wrapVar('--letter-spacing-h3-mobile'),
                lineHeight: '24px',
            },
        },
        '.hui-text-h4': {
            fontFamily: wrapVar('--font-family-secondary'),
            fontSize: '16px',
            fontWeight: wrapVar('--font-weight-h4'),
            letterSpacing: wrapVar('--letter-spacing-h4'),
            lineHeight: '24px',
        },
        '.hui-text-h5': {
            fontFamily: wrapVar('--font-family-primary'),
            fontSize: '16px',
            fontWeight: wrapVar('--font-weight-h5'),
            letterSpacing: wrapVar('--letter-spacing-h5'),
            lineHeight: '24px',
        },
        '.hui-text-h6': {
            fontFamily: wrapVar('--font-family-primary'),
            fontSize: '14px',
            fontWeight: wrapVar('--font-weight-h6'),
            letterSpacing: wrapVar('--letter-spacing-h6'),
            lineHeight: '22px',
            textTransform: wrapVar('--text-transform-h6'),
        },
        '.hui-text-body-primary': {
            fontFamily: wrapVar('--font-family-primary'),
            fontSize: '16px',
            fontWeight: wrapVar('--font-weight-body-primary'),
            letterSpacing: wrapVar('--letter-spacing-body-primary'),
            lineHeight: '24px',
        },
        '.hui-text-body-secondary': {
            fontFamily: wrapVar('--font-family-primary'),
            fontSize: '14px',
            fontWeight: wrapVar('--font-weight-body-secondary'),
            letterSpacing: wrapVar('--letter-spacing-body-secondary'),
            lineHeight: '22px',
        },
        '.hui-text-caption': {
            fontFamily: wrapVar('--font-family-primary'),
            fontSize: '12px',
            fontWeight: wrapVar('--font-weight-caption'),
            letterSpacing: wrapVar('--letter-spacing-caption'),
            lineHeight: '18px',
        },

        // Form Input Utilities
        '.hui-autofill-transparent': {
            '&:-webkit-autofill': {
                '-webkit-box-shadow':
                    '0 0 0 12px rgb(var(--color-background-primary)) inset !important',
                'box-shadow': '0 0 0 12px rgb(var(--color-background-primary)) inset !important',
            },
            '&:-webkit-autofill:active': {
                '-webkit-box-shadow':
                    '0 0 0 12px rgb(var(--color-background-primary)) inset !important',
                'box-shadow': '0 0 0 12px rgb(var(--color-background-primary)) inset !important',
            },
            '&:-webkit-autofill:focus': {
                '-webkit-box-shadow':
                    '0 0 0 12px rgb(var(--color-background-primary)) inset !important',
                'box-shadow': '0 0 0 12px rgb(var(--color-background-primary)) inset !important',
            },
            '&:-webkit-autofill:hover': {
                '-webkit-box-shadow':
                    '0 0 0 12px rgb(var(--color-background-primary)) inset !important',
                'box-shadow': '0 0 0 12px rgb(var(--color-background-primary)) inset !important',
            },
        },
    });
});
