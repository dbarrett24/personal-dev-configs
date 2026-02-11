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
                    'bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover focus:ring-interactive-primary active:bg-interactive-primary-active',
                variant === 'filled' &&
                    style === 'secondary' &&
                    'bg-interactive-secondary text-text-inverse hover:bg-interactive-secondary-hover focus:ring-interactive-secondary',
                variant === 'filled' &&
                    style === 'neutral' &&
                    'bg-surface-secondary hover:bg-surface-tertiary focus:ring-surface-secondary text-text-primary',
                variant === 'filled' &&
                    style === 'critical' &&
                    'bg-critical-500 hover:bg-critical-600 focus:ring-critical-500 text-text-inverse',

                // Variant + Style combinations - Outline
                variant === 'outline' &&
                    style === 'primary' &&
                    'border-2 border-interactive-primary text-interactive-primary hover:bg-interactive-primary hover:text-text-inverse focus:ring-interactive-primary',
                variant === 'outline' &&
                    style === 'secondary' &&
                    'border-2 border-interactive-secondary text-interactive-secondary hover:bg-interactive-secondary hover:text-text-inverse focus:ring-interactive-secondary',
                variant === 'outline' &&
                    style === 'neutral' &&
                    'hover:bg-surface-secondary focus:ring-surface-secondary border-2 border-border-primary text-text-primary',
                variant === 'outline' &&
                    style === 'critical' &&
                    'border-critical-500 text-critical-500 hover:bg-critical-500 focus:ring-critical-500 border-2 hover:text-text-inverse',

                // Variant + Style combinations - Ghost
                variant === 'ghost' &&
                    style === 'primary' &&
                    'hover:bg-surface-secondary text-interactive-primary focus:ring-interactive-primary',
                variant === 'ghost' &&
                    style === 'secondary' &&
                    'hover:bg-surface-secondary text-interactive-secondary focus:ring-interactive-secondary',
                variant === 'ghost' &&
                    style === 'neutral' &&
                    'hover:bg-surface-secondary focus:ring-surface-secondary text-text-secondary',
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
            {isLoading ? (
                <span className="text-sm">Loading...</span>
            ) : (
                children
            )}
            {iconRight && !isLoading && <span className="flex-shrink-0">{iconRight}</span>}
        </button>
    );
};

Button.displayName = 'Button';
