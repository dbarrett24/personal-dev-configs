/**
 * Main Tailwind CSS plugin for the theme system
 *
 * Composes all theme configuration modules (colors, spacing, typography, etc.)
 * into a single Tailwind plugin. The plugin's second argument defines the complete
 * theme, so consumers only need `plugins: [themePlugin]` — no separate theme extension.
 *
 * Internal reference: Hammer UI patterns
 * Source: /Users/dbarr/Documents/Development/ATG/hammer-ui/packages/theme/src/tailwind/plugin.ts
 */

import { borderRadius } from './borderRadius';
import { boxShadow } from './boxShadow';
import { colors } from './colors';
import { fontFamily } from './fontFamily';
import { screens } from './screens';
import { spacing } from './spacing';
import { textComponents } from './text';
import { width } from './width';
import plugin from 'tailwindcss/plugin';

const autofillStyles = {
    '-webkit-box-shadow': '0 0 0 12px rgb(var(--color-background-primary)) inset !important',
    'box-shadow': '0 0 0 12px rgb(var(--color-background-primary)) inset !important',
};

export const themePlugin = plugin(
    ({ addComponents, matchUtilities }) => {
        // https://tailwindcss.com/docs/plugins#css-in-js-syntax
        addComponents(textComponents);
        addComponents({
            '.hui-autofill-transparent': {
                '&:-webkit-autofill': autofillStyles,
                '&:-webkit-autofill:active': autofillStyles,
                '&:-webkit-autofill:focus': autofillStyles,
                '&:-webkit-autofill:hover': autofillStyles,
            },
            '.hui-focus-visible-outline': {
                '@apply focus-visible:outline-focus-primary focus-visible:outline focus-visible:outline-4': {},
            },
            '.hui-focus-visible-outline-inverse': {
                '@apply focus-visible:outline-focus-inverse focus-visible:outline focus-visible:outline-4': {},
            },
            '.scrollbar-default': {
                /* Safari and Chrome */
                '&::-webkit-scrollbar': {
                    display: 'block',
                },
                /* IE and Edge */
                '-ms-overflow-style': 'auto',
                /* Firefox */
                'scrollbar-width': 'auto',
            },
            '.scrollbar-hide': {
                /* Safari and Chrome */
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                /* IE and Edge */
                '-ms-overflow-style': 'none',
                /* Firefox */
                'scrollbar-width': 'none',
            },
        });

        matchUtilities({
            'grid-area': (value) => {
                return {
                    'grid-area': value,
                };
            },
        });
    },
    {
        theme: {
            borderRadius,
            boxShadow,
            colors,
            extend: {
                animation: {
                    fadeIn: 'fadeIn .2s ease-in-out',
                    fadeInOpacity: 'fadeInOpacity 0.5s ease-in-out',
                    fadeOut: 'fadeOut .2s ease-in-out',
                    loading: 'loading 1.4s infinite ease-in-out',
                    'progress-completion': 'shrink 0.15s ease-in-out both, grow 0.15s ease-in-out 0.15s both',
                    'progress-icon-fade-in': 'fadeInOpacity 0.15s ease-in-out 0.15s both',
                    'progress-wave':
                        'progressWave 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, progressWaveRotate 1568ms linear infinite both',
                },
                keyframes: {
                    fadeIn: {
                        from: {
                            opacity: '0',
                            transform: 'scale(0.7)',
                        },
                        to: {
                            opacity: '1',
                            transform: 'scale(1)',
                        },
                    },
                    fadeInOpacity: {
                        from: {
                            opacity: '0',
                            visibility: 'hidden',
                        },
                        to: {
                            opacity: '1',
                            visibility: 'visible',
                        },
                    },
                    fadeOut: {
                        from: {
                            opacity: '1',
                            transform: 'scale(1)',
                        },
                        to: {
                            opacity: '0',
                            transform: 'scale(0.7)',
                        },
                    },
                    grow: {
                        from: { transform: 'scale(0.5)' },
                        to: { transform: 'scale(1)' },
                    },
                    loading: {
                        '0%, 100%, 80%': { transform: 'scale(0)' },
                        '40%': { transform: 'scale(1)' },
                    },
                    progressWave: {
                        '0%': {
                            strokeDasharray: 'var(--progress-wave-start)',
                            strokeDashoffset: '0',
                        },
                        '100%': {
                            strokeDasharray: 'var(--progress-wave-end)',
                            strokeDashoffset: 'var(--progress-wave-full)',
                        },
                        '50%': {
                            strokeDasharray: 'var(--progress-wave-mid)',
                            strokeDashoffset: 'var(--progress-wave-offset)',
                        },
                    },
                    progressWaveRotate: {
                        '0%': { transform: 'rotate(-90deg)' },
                        '100%': { transform: 'rotate(270deg)' },
                    },
                    shrink: {
                        from: { transform: 'scale(1)' },
                        to: { transform: 'scale(0.5)' },
                    },
                },

                maxWidth: width,
                minWidth: width,
                spacing,
                width,
            },
            fontFamily,
            screens,
        },
    }
);
