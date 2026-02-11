import { ButtonProps } from './Button.types';
import { cn } from '@dbarrett24/theme-system';

/**
 * Fully-styled Button component following Hammer UI architecture.
 *
 * Provides complete styling with multiple variants and styles.
 * Brand libraries can wrap this and add minor tweaks via className.
 *
 * Features:
 * - Multiple variants: filled, outline, ghost
 * - Multiple styles: primary, secondary, neutral, critical
 * - Three sizes: sm, md, lg
 * - Loading state with spinner
 * - Icon support (left and right)
 * - Full accessibility support
 * - Theme token integration
 *
 * @example
 * ```tsx
 * <Button variant="filled" style="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = ({
    ariaLabel,
    children,
    className,
    iconLeft,
    iconRight,
    isDisabled = false,
    isLoading = false,
    onClick,
    size = 'md',
    style = 'primary',
    testId,
    type = 'button',
    variant = 'filled',
    ...restProps
}: ButtonProps) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        // Prevent click when disabled or loading
        if (isDisabled || isLoading) {
            event.preventDefault();
            return;
        }

        onClick?.(event);
    };

    return (
        <button
            aria-busy={isLoading}
            aria-disabled={isDisabled || isLoading}
            aria-label={ariaLabel}
            className={cn(
                // Base styles - always applied
                'inline-flex items-center justify-center',
                'rounded-md font-semibold',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',

                // Variant + Style combinations - Filled
                variant === 'filled' &&
                    style === 'primary' &&
                    'bg-link-primary text-text-inverse hover:bg-link-hover focus:ring-link-primary active:bg-link-pressed',
                variant === 'filled' &&
                    style === 'secondary' &&
                    'bg-link-secondary text-text-inverse hover:bg-secondary-600 focus:ring-link-secondary',
                variant === 'filled' &&
                    style === 'neutral' &&
                    'bg-surface-300 text-text-primary hover:bg-surface-400 focus:ring-surface-300',
                variant === 'filled' &&
                    style === 'critical' &&
                    'bg-critical-500 text-text-inverse hover:bg-critical-600 focus:ring-critical-500',

                // Variant + Style combinations - Outline
                variant === 'outline' &&
                    style === 'primary' &&
                    'border-2 border-link-primary text-link-primary hover:bg-link-primary hover:text-text-inverse focus:ring-link-primary',
                variant === 'outline' &&
                    style === 'secondary' &&
                    'border-2 border-link-secondary text-link-secondary hover:bg-link-secondary hover:text-text-inverse focus:ring-link-secondary',
                variant === 'outline' &&
                    style === 'neutral' &&
                    'border-2 border-border-primary text-text-primary hover:bg-surface-200 focus:ring-surface-300',
                variant === 'outline' &&
                    style === 'critical' &&
                    'border-2 border-critical-500 text-critical-500 hover:bg-critical-500 hover:text-text-inverse focus:ring-critical-500',

                // Variant + Style combinations - Ghost
                variant === 'ghost' &&
                    style === 'primary' &&
                    'text-link-primary hover:bg-surface-100 focus:ring-link-primary',
                variant === 'ghost' &&
                    style === 'secondary' &&
                    'text-link-secondary hover:bg-surface-100 focus:ring-link-secondary',
                variant === 'ghost' &&
                    style === 'neutral' &&
                    'text-text-secondary hover:bg-surface-100 focus:ring-surface-300',
                variant === 'ghost' &&
                    style === 'critical' &&
                    'text-critical-500 hover:bg-critical-50 focus:ring-critical-500',

                // Size styles
                size === 'sm' && 'gap-xs px-sm py-2xs text-sm',
                size === 'md' && 'gap-sm px-md py-xs text-base',
                size === 'lg' && 'gap-md px-lg py-sm text-lg',

                className
            )}
            data-testid={testId}
            disabled={isDisabled || isLoading}
            onClick={handleClick}
            type={type}
            {...restProps}
        >
            {iconLeft && !isLoading && <span className="flex-shrink-0">{iconLeft}</span>}
            {isLoading ? <span className="text-sm">Loading...</span> : children}
            {iconRight && !isLoading && <span className="flex-shrink-0">{iconRight}</span>}
        </button>
    );
};

Button.displayName = 'Button';
