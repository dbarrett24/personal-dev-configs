import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 *
 * Combines clsx for conditional class names and tailwind-merge for
 * deduplication and conflict resolution
 *
 * @example
 * ```typescript
 * import { cn } from '@dbarrett24/theme-system';
 *
 * // Basic usage
 * cn('px-2 py-1', 'rounded-md');
 * // => 'px-2 py-1 rounded-md'
 *
 * // With conditionals
 * cn('button', isActive && 'button-active', isDisabled && 'opacity-50');
 * // => 'button button-active' (if isActive is true)
 *
 * // Object syntax
 * cn('button', {
 *     'button-primary': variant === 'primary',
 *     'button-secondary': variant === 'secondary',
 * });
 *
 * // Conflict resolution (last wins)
 * cn('p-4', 'p-2');
 * // => 'p-2'
 * ```
 */
export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

