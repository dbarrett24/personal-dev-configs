import { Archive } from './Archive';
import { HeartStraight } from './HeartStraight';
import { SpinnerGap } from './SpinnerGap';
import { render, screen } from '@dbarrett24/testing-utils';
import { createRef } from 'react';

describe('Generated Icons', () => {
    describe('HeartStraight', () => {
        it('should render without errors', () => {
            render(<HeartStraight />);
            const icon = screen.getByLabelText('Heart Straight');
            expect(icon).toBeVisible();
        });

        it('should apply size prop', () => {
            render(<HeartStraight size="lg" />);
            const icon = screen.getByLabelText('Heart Straight');
            expect(icon).toHaveAttribute('width', '44');
            expect(icon).toHaveAttribute('height', '44');
        });

        it('should apply color prop', () => {
            render(<HeartStraight color="critical" />);
            const icon = screen.getByLabelText('Heart Straight');
            expect(icon).toHaveAttribute('fill', 'rgb(var(--color-icon-critical))');
        });

        it('should support all weight styles', () => {
            const { rerender } = render(<HeartStraight style="regular" />);
            expect(screen.getByLabelText('Heart Straight')).toBeVisible();

            rerender(<HeartStraight style="bold" />);
            expect(screen.getByLabelText('Heart Straight')).toBeVisible();

            rerender(<HeartStraight style="fill" />);
            expect(screen.getByLabelText('Heart Straight')).toBeVisible();

            rerender(<HeartStraight style="duotone" />);
            expect(screen.getByLabelText('Heart Straight')).toBeVisible();
        });

        it('should forward ref', () => {
            const ref = createRef<SVGSVGElement>();
            render(<HeartStraight ref={ref} />);
            expect(ref.current).toBeInstanceOf(SVGSVGElement);
        });
    });

    describe('Archive', () => {
        it('should render without errors', () => {
            render(<Archive />);
            const icon = screen.getByLabelText('Archive');
            expect(icon).toBeVisible();
        });

        it('should apply custom className', () => {
            render(<Archive className="custom-icon-class" />);
            const icon = screen.getByLabelText('Archive');
            expect(icon).toHaveClass('custom-icon-class');
        });

        it('should support different sizes', () => {
            const { rerender } = render(<Archive size="xs" />);
            expect(screen.getByLabelText('Archive')).toHaveAttribute('width', '14');

            rerender(<Archive size="sm" />);
            expect(screen.getByLabelText('Archive')).toHaveAttribute('width', '20');

            rerender(<Archive size="md" />);
            expect(screen.getByLabelText('Archive')).toHaveAttribute('width', '30');

            rerender(<Archive size="lg" />);
            expect(screen.getByLabelText('Archive')).toHaveAttribute('width', '44');
        });

        it('should allow opt-out of aria-label', () => {
            const { container } = render(<Archive $withoutAriaLabel />);
            // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
            const icon = container.querySelector('svg');
            expect(icon).toBeVisible();
            expect(icon).not.toHaveAttribute('aria-label');
        });
    });

    describe('SpinnerGap', () => {
        it('should render without errors', () => {
            render(<SpinnerGap />);
            const icon = screen.getByLabelText('Spinner Gap');
            expect(icon).toBeVisible();
        });

        it('should support custom styles', () => {
            render(<SpinnerGap customStyles={{ opacity: 0.5 }} />);
            const icon = screen.getByLabelText('Spinner Gap');
            expect(icon).toHaveStyle({ opacity: '0.5' });
        });

        it('should accept additional SVG props', () => {
            render(
                <SpinnerGap
                    aria-label="Loading"
                    data-testid="spinner-icon"
                />
            );
            const icon = screen.getByTestId('spinner-icon');
            expect(icon).toHaveAttribute('aria-label', 'Loading');
        });

        it('should work with inherit color', () => {
            render(<SpinnerGap color="inherit" />);
            const icon = screen.getByLabelText('Spinner Gap');
            expect(icon).toHaveAttribute('fill', 'currentColor');
        });
    });

    describe('All generated icons', () => {
        it('should have consistent structure', () => {
            const icons = [HeartStraight, Archive, SpinnerGap];

            icons.forEach((Icon) => {
                const { container } = render(<Icon />);
                // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
                const svg = container.querySelector('svg');

                expect(svg).toBeVisible();
                expect(svg?.tagName).toBe('svg');
                expect(svg).toHaveAttribute('viewBox');
                expect(svg).toHaveAttribute('fill');
            });
        });
    });
});
