import { IconBase, getColor, iconSizesToPixels, type IconProps, type IconWeight } from './IconBase';
import { render, screen } from '@dbarrett24/testing-utils';
import { createRef, forwardRef } from 'react';

// Mock icon weights for testing
const mockWeights = {
    bold: (
        <svg
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 0h24v24H0z"
                strokeWidth="2"
            />
        </svg>
    ),
    duotone: (
        <svg
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 0h24v24H0z"
                opacity="0.2"
            />
            <path d="M0 0h24v24H0z" />
        </svg>
    ),
    fill: (
        <svg
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 0h24v24H0z"
                fill="currentColor"
            />
        </svg>
    ),
    regular: (
        <svg
            fill="currentColor"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0h24v24H0z" />
        </svg>
    ),
};

const TestIcon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
        <IconBase
            displayName="TestIcon"
            ref={ref}
            weights={mockWeights}
            {...props}
        />
    );
});

TestIcon.displayName = 'TestIcon';

describe('IconBase', () => {
    describe('rendering', () => {
        it('should render an SVG element', () => {
            render(<TestIcon />);
            const svg = screen.getByLabelText('Test Icon');
            expect(svg.tagName).toBe('svg');
        });

        it('should render with default props', () => {
            render(<TestIcon />);
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toHaveAttribute('aria-label', 'Test Icon');
            expect(svg).toHaveAttribute('width', '30'); // md size default
            expect(svg).toHaveAttribute('height', '30');
        });

        it('should use displayName for aria-label', () => {
            render(
                <IconBase
                    displayName="CustomIcon"
                    weights={mockWeights}
                />
            );
            expect(screen.getByLabelText('Custom Icon')).toBeInTheDocument();
        });
    });

    describe('sizes', () => {
        it.each([
            ['xs', iconSizesToPixels.xs],
            ['sm', iconSizesToPixels.sm],
            ['md', iconSizesToPixels.md],
            ['lg', iconSizesToPixels.lg],
        ] as const)('should render %s size with %dpx dimensions', (size, pixels) => {
            render(<TestIcon size={size} />);
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toHaveAttribute('width', pixels.toString());
            expect(svg).toHaveAttribute('height', pixels.toString());
            expect(svg).toHaveStyle({
                minHeight: `${pixels}px`,
                minWidth: `${pixels}px`,
            });
        });

        it('should default to md size when not specified', () => {
            render(<TestIcon />);
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toHaveAttribute('width', '30');
            expect(svg).toHaveAttribute('height', '30');
        });
    });

    describe('colors', () => {
        it.each([
            ['primary', 'rgb(var(--color-icon-primary))'],
            ['secondary', 'rgb(var(--color-icon-secondary))'],
            ['info', 'rgb(var(--color-icon-info))'],
            ['success', 'rgb(var(--color-icon-success))'],
            ['warning', 'rgb(var(--color-icon-warning))'],
            ['critical', 'rgb(var(--color-icon-critical))'],
            ['disabled', 'rgb(var(--color-icon-disabled))'],
            ['inverse', 'rgb(var(--color-icon-inverse))'],
        ] as const)('should apply %s color', (color, expectedFill) => {
            render(<TestIcon color={color} />);
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toHaveAttribute('fill', expectedFill);
        });

        it('should use currentColor for inherit color', () => {
            render(<TestIcon color="inherit" />);
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toHaveAttribute('fill', 'currentColor');
        });

        it('should use currentColor when color is undefined', () => {
            render(<TestIcon />);
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toHaveAttribute('fill', 'currentColor');
        });
    });

    describe('weights/styles', () => {
        it.each(['regular', 'bold', 'fill', 'duotone'] as IconWeight[])('should render %s weight', (weight) => {
            const { container } = render(<TestIcon style={weight} />);
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toBeInTheDocument();
            // Verify the correct weight element is rendered
            // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
            expect(container.querySelector('path')).toBeInTheDocument();
        });

        it('should default to regular weight when not specified', () => {
            const { container } = render(<TestIcon />);
            // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
            expect(container.querySelector('path')).toBeInTheDocument();
        });

        it('should warn and return null for missing weight', () => {
            const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
            const incompleteWeights = {
                regular: (
                    <svg
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" />
                    </svg>
                ),
            };

            const { container } = render(
                <IconBase
                    displayName="IncompleteIcon"
                    style="bold"
                    weights={incompleteWeights}
                />
            );

            expect(consoleWarnSpy).toHaveBeenCalledWith(
                'IconBase: No weight found for style "bold" for icon "IncompleteIcon"'
            );
            expect(container).toBeEmptyDOMElement();

            consoleWarnSpy.mockRestore();
        });
    });

    describe('accessibility', () => {
        it('should set aria-label from displayName', () => {
            render(<TestIcon />);
            expect(screen.getByLabelText('Test Icon')).toBeInTheDocument();
        });

        it('should allow custom aria-label', () => {
            render(<TestIcon aria-label="Custom Label" />);
            expect(screen.getByLabelText('Custom Label')).toBeInTheDocument();
        });

        it('should not set aria-label when $withoutAriaLabel is true', () => {
            const { container } = render(<TestIcon $withoutAriaLabel />);
            // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
            const svg = container.querySelector('svg');
            expect(svg).toBeInTheDocument();
            expect(svg).not.toHaveAttribute('aria-label');
        });

        it('should respect custom aria-label even with $withoutAriaLabel', () => {
            render(
                <TestIcon
                    $withoutAriaLabel
                    aria-label="Custom Label"
                />
            );
            expect(screen.getByLabelText('Custom Label')).toBeInTheDocument();
        });

        it('should handle displayName with multiple words', () => {
            render(
                <IconBase
                    displayName="HeartStraight"
                    weights={mockWeights}
                />
            );
            expect(screen.getByLabelText('Heart Straight')).toBeInTheDocument();
        });

        it('should handle displayName with consecutive capitals', () => {
            render(
                <IconBase
                    displayName="HTMLElement"
                    weights={mockWeights}
                />
            );
            expect(screen.getByLabelText('H T M L Element')).toBeInTheDocument();
        });

        it('should handle undefined displayName gracefully', () => {
            const { container } = render(
                <IconBase
                    displayName={undefined}
                    weights={mockWeights}
                />
            );
            // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
            const svg = container.querySelector('svg');
            expect(svg).toBeInTheDocument();
            // When displayName is undefined, getDisplayName returns empty string
            expect(svg).toHaveAttribute('aria-label', '');
        });
    });

    describe('ref forwarding', () => {
        it('should forward ref to SVG element', () => {
            const ref = createRef<SVGSVGElement>();
            render(<TestIcon ref={ref} />);

            expect(ref.current).toBeInstanceOf(SVGSVGElement);
            expect(ref.current?.tagName).toBe('svg');
        });

        it('should allow calling methods on forwarded ref', () => {
            const ref = createRef<SVGSVGElement>();
            render(<TestIcon ref={ref} />);

            expect(ref.current?.getBoundingClientRect).toBeDefined();
            expect(typeof ref.current?.getBoundingClientRect()).toBe('object');
        });
    });

    describe('className handling', () => {
        it('should apply custom className', () => {
            render(<TestIcon className="custom-class" />);
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toHaveClass('custom-class');
        });

        it('should merge multiple custom classNames', () => {
            render(<TestIcon className="class-one class-two" />);
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toHaveClass('class-one');
            expect(svg).toHaveClass('class-two');
        });
    });

    describe('custom styles', () => {
        it('should apply custom styles', () => {
            render(<TestIcon customStyles={{ opacity: 0.5, transform: 'rotate(45deg)' }} />);
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toHaveStyle({
                opacity: '0.5',
                transform: 'rotate(45deg)',
            });
        });

        it('should merge custom styles with default styles', () => {
            render(
                <TestIcon
                    customStyles={{ opacity: 0.7 }}
                    size="lg"
                />
            );
            const svg = screen.getByLabelText('Test Icon');

            expect(svg).toHaveStyle({
                minHeight: '44px',
                minWidth: '44px',
                opacity: '0.7',
            });
        });
    });

    describe('getColor utility', () => {
        it('should return correct CSS variable for each color', () => {
            expect(getColor('primary')).toBe('rgb(var(--color-icon-primary))');
            expect(getColor('secondary')).toBe('rgb(var(--color-icon-secondary))');
            expect(getColor('info')).toBe('rgb(var(--color-icon-info))');
            expect(getColor('success')).toBe('rgb(var(--color-icon-success))');
            expect(getColor('warning')).toBe('rgb(var(--color-icon-warning))');
            expect(getColor('critical')).toBe('rgb(var(--color-icon-critical))');
            expect(getColor('disabled')).toBe('rgb(var(--color-icon-disabled))');
            expect(getColor('inverse')).toBe('rgb(var(--color-icon-inverse))');
        });

        it('should return undefined for inherit color', () => {
            expect(getColor('inherit')).toBeUndefined();
        });

        it('should return undefined for undefined color', () => {
            expect(getColor(undefined)).toBeUndefined();
        });
    });
});
