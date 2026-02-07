import React from 'react';
import { Button as CoreButton, type ButtonProps as CoreButtonProps } from '@dbarrett24/core-components';
import { cn } from '@dbarrett24/theme-system';

export type ButtonProps = CoreButtonProps;

/**
 * Button component for Professional Brand
 *
 * Wraps core Button and adds brand-specific styling tweaks:
 * - Subtle shadow effects
 * - Sharp corners (rounded-sm)
 * - Professional aesthetic
 *
 * @example
 * ```tsx
 * <Button variant="filled" style="primary">Get Started</Button>
 * <Button variant="outline" style="primary" size="sm">Learn More</Button>
 * <Button variant="ghost" style="primary" isDisabled>Coming Soon</Button>
 * ```
 */
export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <CoreButton
            {...props}
            className={cn(
                // Add professional-specific effects
                'shadow-sm',
                'rounded-sm', // Sharper corners
                className
            )}
        />
    );
};

Button.displayName = 'Button';
