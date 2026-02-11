// Tailwind plugin (primary export — includes complete theme config)
export { themePlugin } from './tailwind/plugin';

// Tailwind configuration modules
export * from './tailwind/colors';
export * from './tailwind/screens';
export * from './tailwind/spacing';
export * from './tailwind/fontFamily';
export * from './tailwind/text';

// CSS variable constants
export * from './tailwind/cssVars';

// Variable wrapping utilities
export * from './utils/wrapVar';

// Color generation utilities
export * from './utils/color';

// Brand theme definitions
export * from './themes/brands';

// Class name utility
export { cn } from './utils/cn';
