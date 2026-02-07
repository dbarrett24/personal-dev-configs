import { Button as CoreButton, type ButtonProps as CoreButtonProps } from '@dbarrett24/core-components';
import { cn } from '@dbarrett24/theme-system';

export type ButtonProps = CoreButtonProps;

/**
 * Button component for Basketball Training brand
 *
 * Wraps core Button and adds brand-specific styling tweaks:
 * - Shadow effects for depth
 * - Scale animation on interaction
 * - Energetic transitions
 *
 * @example
 * ```tsx
 * <Button variant="filled" style="primary">Start Training</Button>
 * <Button variant="outline" style="primary" size="sm">View Stats</Button>
 * <Button variant="ghost" style="primary" isDisabled>Coming Soon</Button>
 * ```
 */
export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <CoreButton
            {...props}
            className={cn(
                // Add basketball-specific effects
                'shadow-md hover:shadow-lg',
                'active:scale-98 transition-transform',
                className
            )}
        />
    );
};

Button.displayName = 'Button';
