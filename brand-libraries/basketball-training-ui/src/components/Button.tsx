import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@yourname/theme-system';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};

/**
 * Button component for Basketball Training brand
 *
 * @example
 * ```tsx
 * <Button variant="primary">Start Training</Button>
 * <Button variant="secondary" size="sm">View Stats</Button>
 * <Button variant="outline" disabled>Coming Soon</Button>
 * ```
 */
export const Button = ({ variant = 'primary', size = 'md', disabled, children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                // Base styles
                'inline-flex items-center justify-center',
                'font-semibold rounded-md',
                'transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',

                // Variant styles
                {
                    'bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover active:bg-interactive-primary-active':
                        variant === 'primary',
                    'bg-interactive-secondary text-text-inverse hover:bg-interactive-secondary-hover': variant === 'secondary',
                    'border-2 border-interactive-primary text-interactive-primary hover:bg-interactive-primary hover:text-text-inverse':
                        variant === 'outline',
                },

                // Size styles
                {
                    'px-sm py-2xs text-sm': size === 'sm',
                    'px-md py-xs text-base': size === 'md',
                    'px-lg py-sm text-lg': size === 'lg',
                },

                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

Button.displayName = 'Button';

