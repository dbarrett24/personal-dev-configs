import { Button } from './Button';
import { HeartStraight, Lock } from '../Icons';
import { render, screen, userEvent } from '@dbarrett24/testing-utils';
import { ComponentProps, createRef } from 'react';

const testText = 'design systemmmmm';
let onClick = jest.fn();
let onSubmit = jest.fn();

describe('Button', () => {
    let props: ComponentProps<typeof Button>;

    beforeEach(() => {
        props = {
            'aria-label': '',
            children: testText,
            onClick,
        };

        onClick.mockReset();
        onSubmit.mockReset();
    });

    describe('disabled state', () => {
        it('should prevent onClick when disabled', async () => {
            render(
                <Button
                    disabled
                    {...props}
                />
            );

            await userEvent.click(screen.getByRole('button'));

            expect(props.onClick).not.toHaveBeenCalled();
        });

        it('should prevent onSubmit and onClick when disabled in form', async () => {
            render(
                <form onSubmit={onSubmit}>
                    <Button
                        disabled
                        {...props}
                    />
                </form>
            );

            await userEvent.click(screen.getByRole('button'));

            expect(onSubmit).not.toHaveBeenCalled();
            expect(props.onClick).not.toHaveBeenCalled();
        });
    });

    describe('loading state', () => {
        it('should prevent onClick when loading', async () => {
            render(
                <Button
                    loading
                    {...props}
                />
            );

            await userEvent.click(screen.getByRole('button'));

            expect(props.onClick).not.toHaveBeenCalled();
        });

        it('should prevent onSubmit and onClick when loading in form', async () => {
            render(
                <form onSubmit={onSubmit}>
                    <Button
                        loading
                        {...props}
                    />
                </form>
            );

            await userEvent.click(screen.getByRole('button'));

            expect(onSubmit).not.toHaveBeenCalled();
            expect(props.onClick).not.toHaveBeenCalled();
        });

        it('should prevent onSubmit and onClick when both loading and disabled', async () => {
            render(
                <form onSubmit={onSubmit}>
                    <Button
                        disabled
                        loading
                        {...props}
                    />
                </form>
            );

            await userEvent.click(screen.getByRole('button'));

            expect(onSubmit).not.toHaveBeenCalled();
            expect(props.onClick).not.toHaveBeenCalled();
        });

        it('loading should supersede disabled (button not HTML-disabled)', async () => {
            const { container } = render(
                <Button
                    disabled
                    loading
                    {...props}
                />
            );

            const button = container.querySelector('button');
            expect(button).toBeEnabled();
            expect(button).toHaveAttribute('aria-busy', 'true');

            await userEvent.click(screen.getByRole('button'));

            expect(props.onClick).not.toHaveBeenCalled();
        });

        it('should display loading spinner when loading', () => {
            render(
                <Button
                    loading
                    {...props}
                />
            );

            expect(screen.getByTestId('loading-spinner-animation')).toBeVisible();
        });

        it('should set aria-busy and aria-live when loading', () => {
            render(
                <Button
                    loading
                    {...props}
                />
            );

            const button = screen.getByRole('button');
            expect(button).toHaveAttribute('aria-busy', 'true');
            expect(button).toHaveAttribute('aria-live', 'polite');
        });
    });

    describe('accessibility', () => {
        it('should override aria-label when provided', async () => {
            render(
                <Button
                    {...props}
                    aria-label="custom label"
                >
                    Button text
                </Button>
            );

            expect(screen.getByText('Button text')).toHaveAttribute('aria-label', 'custom label');
        });

        it('should have default dataTestId of "Button"', () => {
            render(<Button {...props} />);

            expect(screen.getByTestId('Button')).toBeVisible();
        });

        it('should allow custom dataTestId', () => {
            render(
                <Button
                    {...props}
                    dataTestId="custom-button"
                />
            );

            expect(screen.getByTestId('custom-button')).toBeVisible();
        });
    });

    describe('icons', () => {
        describe.each`
            text    | size
            ${'md'} | ${'md'}
            ${'sm'} | ${'sm'}
        `('$text size', ({ size }) => {
            it('should render icons on the left', () => {
                const { asFragment } = render(
                    <Button
                        {...props}
                        iconLeft={HeartStraight}
                        size={size}
                    >
                        Button with left icon
                    </Button>
                );

                expect(asFragment()).toMatchSnapshot();
            });

            it('should render icons on the right', () => {
                const { asFragment } = render(
                    <Button
                        {...props}
                        iconRight={Lock}
                        size={size}
                    >
                        Button with right icon
                    </Button>
                );

                expect(asFragment()).toMatchSnapshot();
            });

            it('should render icons on both sides', () => {
                const { asFragment } = render(
                    <Button
                        {...props}
                        iconLeft={HeartStraight}
                        iconRight={Lock}
                        size={size}
                    >
                        Button with both icons
                    </Button>
                );

                expect(asFragment()).toMatchSnapshot();
            });
        });
    });

    describe('variants', () => {
        it.each(['filled', 'outlined', 'transparent'] as const)(
            'should render %s variant correctly',
            async (variant) => {
                const { asFragment } = render(
                    <Button
                        {...props}
                        variant={variant}
                    />
                );

                expect(asFragment()).toMatchSnapshot();
                expect(screen.getByText(testText)).toBeVisible();
                expect(screen.getByRole('button')).toBeVisible();
                expect(screen.getByRole('button')).toBeEnabled();

                await userEvent.click(screen.getByRole('button'));

                expect(props.onClick).toHaveBeenCalled();
            }
        );
    });

    describe('styles', () => {
        it.each(['primary', 'critical', 'neutral', 'inverse'] as const)('should render %s style correctly', (style) => {
            const { asFragment } = render(
                <Button
                    {...props}
                    style={style}
                />
            );

            expect(asFragment()).toMatchSnapshot();
            expect(screen.getByRole('button')).toBeVisible();
        });
    });

    describe('sizes', () => {
        it.each(['md', 'sm'] as const)('should render %s size correctly', (size) => {
            const { asFragment } = render(
                <Button
                    {...props}
                    size={size}
                />
            );

            expect(asFragment()).toMatchSnapshot();
        });
    });

    describe('polymorphic rendering', () => {
        it('should render as button by default', () => {
            const { container } = render(<Button {...props} />);

            expect(container.querySelector('button')).toBeVisible();
        });

        it('should render as different element when using "as" prop', () => {
            const { container } = render(
                <Button
                    {...props}
                    as="div"
                />
            );

            expect(container.querySelector('div')).toBeVisible();
            expect(container.querySelector('button')).not.toBeInTheDocument();
        });

        it('should render as anchor with href', () => {
            const { container } = render(
                <Button
                    {...props}
                    as="a"
                    href="https://example.com"
                />
            );

            const anchor = container.querySelector('a');
            expect(anchor).toBeVisible();
            expect(anchor).toHaveAttribute('href', 'https://example.com');
        });
    });

    describe('ref forwarding', () => {
        it('should forward ref to button element', () => {
            const ref = createRef<HTMLButtonElement>();

            render(
                <Button
                    {...props}
                    ref={ref}
                />
            );

            expect(ref.current).toBeInstanceOf(HTMLButtonElement);
            expect(ref.current?.tagName).toBe('BUTTON');
        });
    });

    describe('className merging', () => {
        it('should merge custom className with default classes', () => {
            render(
                <Button
                    {...props}
                    className="custom-class"
                />
            );

            const button = screen.getByRole('button');
            expect(button).toHaveClass('custom-class');
            expect(button).toHaveClass('hui-focus-visible-outline');
        });
    });

    describe('inline styles', () => {
        it('should apply custom inline styles', () => {
            render(
                <Button
                    {...props}
                    inlineStyles={{ backgroundColor: 'red' }}
                />
            );

            const button = screen.getByRole('button');
            expect(button).toHaveStyle({ backgroundColor: 'red' });
        });

        it('should apply CSS variable font styles', () => {
            render(<Button {...props} />);

            const button = screen.getByRole('button');
            expect(button).toHaveStyle({
                fontWeight: 'var(--font-weight-button)',
                textTransform: 'var(--text-transform-button)',
            });
        });
    });

    describe('button types', () => {
        it('should accept type="button"', () => {
            const { container } = render(
                <Button
                    {...props}
                    type="button"
                />
            );

            const button = container.querySelector('button');
            expect(button).toHaveAttribute('type', 'button');
        });

        it('should accept type="submit"', () => {
            const { container } = render(
                <Button
                    {...props}
                    type="submit"
                />
            );

            const button = container.querySelector('button');
            expect(button).toHaveAttribute('type', 'submit');
        });

        it('should accept type="reset"', () => {
            const { container } = render(
                <Button
                    {...props}
                    type="reset"
                />
            );

            const button = container.querySelector('button');
            expect(button).toHaveAttribute('type', 'reset');
        });
    });
});
