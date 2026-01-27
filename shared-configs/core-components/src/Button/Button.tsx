import React from 'react';
import { cn } from '@dbarrett24/theme-system';
import { ButtonProps } from './Button.types';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

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
    variant = 'filled',
    style = 'primary',
    size = 'md',
    children,
    isDisabled = false,
    isLoading = false,
    iconLeft,
    iconRight,
    type = 'button',
    ariaLabel,
    className,
    onClick,
    testId,
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
            type={type}
            disabled={isDisabled || isLoading}
            onClick={handleClick}
            aria-label={ariaLabel}
            aria-busy={isLoading}
            aria-disabled={isDisabled || isLoading}
            data-testid={testId}
            className={cn(
                // Base styles - always applied
                'inline-flex items-center justify-center',
                'font-semibold rounded-md',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                'disabled:opacity-50 disabled:cursor-not-allowed',

                // Variant + Style combinations - Filled
                variant === 'filled' &&
                    style === 'primary' &&
                    'bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover active:bg-interactive-primary-active focus:ring-interactive-primary',
                variant === 'filled' &&
                    style === 'secondary' &&
                    'bg-interactive-secondary text-text-inverse hover:bg-interactive-secondary-hover focus:ring-interactive-secondary',
                variant === 'filled' &&
                    style === 'neutral' &&
                    'bg-surface-secondary text-text-primary hover:bg-surface-tertiary focus:ring-surface-secondary',
                variant === 'filled' &&
                    style === 'critical' &&
                    'bg-critical-500 text-text-inverse hover:bg-critical-600 focus:ring-critical-500',

                // Variant + Style combinations - Outline
                variant === 'outline' &&
                    style === 'primary' &&
                    'border-2 border-interactive-primary text-interactive-primary hover:bg-interactive-primary hover:text-text-inverse focus:ring-interactive-primary',
                variant === 'outline' &&
                    style === 'secondary' &&
                    'border-2 border-interactive-secondary text-interactive-secondary hover:bg-interactive-secondary hover:text-text-inverse focus:ring-interactive-secondary',
                variant === 'outline' &&
                    style === 'neutral' &&
                    'border-2 border-border-primary text-text-primary hover:bg-surface-secondary focus:ring-surface-secondary',
                variant === 'outline' &&
                    style === 'critical' &&
                    'border-2 border-critical-500 text-critical-500 hover:bg-critical-500 hover:text-text-inverse focus:ring-critical-500',

                // Variant + Style combinations - Ghost
                variant === 'ghost' &&
                    style === 'primary' &&
                    'text-interactive-primary hover:bg-surface-secondary focus:ring-interactive-primary',
                variant === 'ghost' &&
                    style === 'secondary' &&
                    'text-interactive-secondary hover:bg-surface-secondary focus:ring-interactive-secondary',
                variant === 'ghost' &&
                    style === 'neutral' &&
                    'text-text-secondary hover:bg-surface-secondary focus:ring-surface-secondary',
                variant === 'ghost' &&
                    style === 'critical' &&
                    'text-critical-500 hover:bg-critical-50 focus:ring-critical-500',

                // Size styles
                size === 'sm' && 'px-sm py-2xs text-sm gap-xs',
                size === 'md' && 'px-md py-xs text-base gap-sm',
                size === 'lg' && 'px-lg py-sm text-lg gap-md',

                className
            )}
            {...restProps}
        >
            {iconLeft && !isLoading && <span className="flex-shrink-0">{iconLeft}</span>}
            {isLoading ? <LoadingSpinner size={size} /> : children}
            {iconRight && !isLoading && <span className="flex-shrink-0">{iconRight}</span>}
        </button>
    );
};

Button.displayName = 'Button';
