import { cn } from '@dbarrett24/theme-system';
import { forwardRef, HTMLProps, ElementType } from 'react';

function factory(classes: string) {
    return forwardRef<
        HTMLAnchorElement,
        Omit<HTMLProps<HTMLAnchorElement>, 'size'> & {
            /**
             * Polymorphic component type. Use this to render as a Next.js Link or any other element.
             * @example <Link as={NextLink} href="/about">About</Link>
             */
            as?: ElementType;
            /**
             * Whether the link is disabled. Disables `onClick` as well.
             */
            disabled?: boolean;
            /**
             * The size of the link to render.
             *
             * xs = extra small
             * sm = small
             * md = medium (default)
             */
            size?: 'xs' | 'sm' | 'md';
        }
    >(({ as: Component = 'a', className, disabled, href, onClick, size = 'md', ...rest }, ref) => {
        return (
            <Component
                aria-disabled={disabled}
                className={cn(
                    'cursor-pointer outline-offset-2 transition-colors hover:underline aria-disabled:cursor-not-allowed aria-disabled:text-link-disabled',
                    {
                        'hui-link-md': size === 'md',
                        'hui-link-sm': size === 'sm',
                        'hui-link-xs': size === 'xs',
                    },
                    classes,
                    className
                )}
                href={href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (disabled) {
                        e.preventDefault();
                        return;
                    }

                    if (onClick) {
                        onClick(e);
                    }
                }}
                ref={ref}
                tabIndex={0}
                {...rest}
            />
        );
    });
}

export const Link = factory(
    'underline text-link-primary hover:text-link-hover active:text-link-pressed hui-focus-visible-outline'
);
Link.displayName = 'Link';

export const WeakLink = factory(
    'underline text-link-secondary hover:text-link-hover active:text-link-pressed hui-focus-visible-outline'
);
WeakLink.displayName = 'WeakLink';

export const MonochromeLink = factory(
    'underline text-link-monochrome hover:text-link-hover active:text-link-pressed hui-focus-visible-outline'
);
MonochromeLink.displayName = 'MonochromeLink';

export const InverseLink = factory('underline text-link-inverse hui-focus-visible-outline-inverse');
InverseLink.displayName = 'InverseLink';

export const SubtleLink = factory(
    'text-link-primary hover:text-link-hover active:text-link-pressed hui-focus-visible-outline'
);
SubtleLink.displayName = 'SubtleLink';

export const SubtleWeakLink = factory(
    'text-link-secondary hover:text-link-hover active:text-link-pressed hui-focus-visible-outline'
);
SubtleWeakLink.displayName = 'SubtleWeakLink';

export const SubtleMonochromeLink = factory(
    'text-link-monochrome hover:text-link-hover active:text-link-pressed hui-focus-visible-outline'
);
SubtleMonochromeLink.displayName = 'SubtleMonochromeLink';

export const SubtleInverseLink = factory('text-link-inverse hui-focus-visible-outline-inverse');
SubtleInverseLink.displayName = 'SubtleInverseLink';
