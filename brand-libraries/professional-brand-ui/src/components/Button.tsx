import { type ButtonHTMLAttributes } from 'react';
import { cn } from '@yourname/theme-system';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
};

/**
 * Button component for Professional brand
 *
 * @example
 * ```tsx
 * <Button variant="primary">Get Started</Button>
 * <Button variant="secondary" size="sm">Learn More</Button>
 * <Button variant="outline" disabled>Coming Soon</Button>
 * ```
 */
export const Button = ({ variant = 'primary', size = 'md', disabled, children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(
                // Base styles
                'inline-flex items-center justify-center',
                'font-medium rounded-md',
                'transition-all duration-200',
                'focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2',
                'disabled:cursor-not-allowed disabled:opacity-50',

                // Variant styles
                {
                    'bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover active:bg-interactive-primary-active shadow-sm':
                        variant === 'primary',
                    'bg-interactive-secondary text-text-inverse hover:bg-interactive-secondary-hover shadow-sm':
                        variant === 'secondary',
                    'border-2 border-interactive-primary text-interactive-primary hover:bg-interactive-primary hover:text-text-inverse':
                        variant === 'outline',
                    'text-interactive-primary hover:bg-background-secondary': variant === 'ghost',
                },

                // Size styles
                {
                    'px-sm py-2xs text-sm h-8': size === 'sm',
                    'px-md py-xs text-base h-10': size === 'md',
                    'px-lg py-sm text-lg h-12': size === 'lg',
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

