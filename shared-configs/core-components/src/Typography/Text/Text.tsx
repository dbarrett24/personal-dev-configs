import { cn, type TextColorAliases } from '@dbarrett24/theme-system';
import { forwardRef, HTMLProps } from 'react';

type ColorProp = {
    /**
     * Pass any text color like 'primary', 'secondary', 'critical', 'success', 'info', 'inverse', etc.
     *
     * You can access all of these colors through tailwind through `text-text-[color]` like `text-text-primary`, etc.
     */
    color?: TextColorAliases;
};

const colors = {
    critical: 'text-text-critical',
    disabled: 'text-text-disabled',
    inactive: 'text-text-inactive',
    info: 'text-text-info',
    inverse: 'text-text-inverse',
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    success: 'text-text-success',
    warning: 'text-text-warning',
} satisfies Record<TextColorAliases, string>;

/**
 * H1 styled text. If you need a non `h1` with the same styles, use the classnames `hui-text-h1` and `text-text-[yourColor]`.
 */
export const H1 = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <h1
                className={cn('hui-text-h1', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </h1>
        );
    }
);
H1.displayName = 'H1';

/**
 * H2 styled text. If you need a non `h2` with the same styles, use the classnames `hui-text-h2` and `text-text-[yourColor]`.
 */
export const H2 = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <h2
                className={cn('hui-text-h2', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </h2>
        );
    }
);
H2.displayName = 'H2';

/**
 * H3 styled text. If you need a non `h3` with the same styles, use the classnames `hui-text-h3` and `text-text-[yourColor]`.
 */
export const H3 = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <h3
                className={cn('hui-text-h3', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </h3>
        );
    }
);
H3.displayName = 'H3';

/**
 * H4 styled text. If you need a non `h4` with the same styles, use the classnames `hui-text-h4` and `text-text-[yourColor]`.
 */
export const H4 = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <h4
                className={cn('hui-text-h4', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </h4>
        );
    }
);
H4.displayName = 'H4';

/**
 * H5 styled text. If you need a non `h5` with the same styles, use the classnames `hui-text-h5` and `text-text-[yourColor]`.
 */
export const H5 = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <h5
                className={cn('hui-text-h5', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </h5>
        );
    }
);
H5.displayName = 'H5';

/**
 * H6 styled text. If you need a non `h6` with the same styles, use the classnames `hui-text-h6` and `text-text-[yourColor]`.
 */
export const H6 = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <h6
                className={cn('hui-text-h6', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </h6>
        );
    }
);
H6.displayName = 'H6';

/**
 * BodyPrimary styled text. If you need a non `span` with the same styles, use the classnames `hui-text-body-primary` and `text-text-[yourColor]`.
 */
export const BodyPrimary = forwardRef<HTMLSpanElement, HTMLProps<HTMLSpanElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <span
                className={cn('hui-text-body-primary', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </span>
        );
    }
);
BodyPrimary.displayName = 'BodyPrimary';

/**
 * BodySecondary styled text. If you need a non `span` with the same styles, use the classnames `hui-text-body-secondary` and `text-text-[yourColor]`.
 */
export const BodySecondary = forwardRef<HTMLSpanElement, HTMLProps<HTMLSpanElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <span
                className={cn('hui-text-body-secondary', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </span>
        );
    }
);
BodySecondary.displayName = 'BodySecondary';

/**
 * Caption styled text. If you need a non `span` with the same styles, use the classnames `hui-text-caption` and `text-text-[yourColor]`.
 */
export const Caption = forwardRef<HTMLSpanElement, HTMLProps<HTMLSpanElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <span
                className={cn('hui-text-caption', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </span>
        );
    }
);
Caption.displayName = 'Caption';

/**
 * LabelMini styled text. If you need a non `label` with the same styles, use the classnames `hui-text-label-mini` and `text-text-[yourColor]`.
 */
export const LabelMini = forwardRef<HTMLLabelElement, HTMLProps<HTMLLabelElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <label
                className={cn('hui-text-label-mini', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </label>
        );
    }
);
LabelMini.displayName = 'LabelMini';

/**
 * LabelMiniStrong styled text. If you need a non `label` with the same styles, use the classnames `hui-text-label-mini-strong` and `text-text-[yourColor]`.
 */
export const LabelMiniStrong = forwardRef<HTMLLabelElement, HTMLProps<HTMLLabelElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <label
                className={cn('hui-text-label-mini-strong', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </label>
        );
    }
);
LabelMiniStrong.displayName = 'LabelMiniStrong';

/**
 * LabelStrong styled text. If you need a non `label` with the same styles, use the classnames `hui-text-label-strong` and `text-text-[yourColor]`.
 */
export const LabelStrong = forwardRef<HTMLLabelElement, HTMLProps<HTMLLabelElement> & ColorProp>(
    ({ children, className, color = 'primary', ...props }, ref) => {
        return (
            <label
                className={cn('hui-text-label-strong', colors[color], className)}
                ref={ref}
                {...props}
            >
                {children}
            </label>
        );
    }
);
LabelStrong.displayName = 'LabelStrong';
