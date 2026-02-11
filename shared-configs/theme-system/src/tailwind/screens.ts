/**
 * Responsive breakpoints for Tailwind CSS
 *
 * These breakpoints mirror the Hammer UI responsive system.
 * Usage: mobile:gap-[2px], mdMin:max-w-[786px], desktop:text-lg
 */
export const screens = {
    desktop: { min: '769px' },
    lgMax: { max: '1644px' },
    lgMin: { min: '1249px' },
    mdMax: { max: '1248px' },
    mdMin: { min: '1024px' },
    mobile: { max: '480px' },
    mobileSmall: { max: '380px' },
    print: { raw: 'print' },
    smMax: { max: '1023px' },
    smMin: { min: '769px' },
    tabletMax: { max: '954px' },
    tabletMin: { min: '954px' },
    xlMin: { min: '1645px' },
    xsMax: { max: '768px' },
} as const;
