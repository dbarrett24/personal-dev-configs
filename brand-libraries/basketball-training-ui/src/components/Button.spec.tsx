import { render, screen, userEvent } from '@dbarrett24/testing-utils';
import React from 'react';
import { Button } from './Button';

describe('Button', () => {
    it('renders with default props', () => {
        const { asFragment } = render(<Button>Click me</Button>);

        expect(screen.getByText('Click me')).toBeVisible();
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders with primary variant', () => {
        render(<Button variant="primary">Primary</Button>);

        expect(screen.getByText('Primary')).toBeVisible();
    });

    it('renders with secondary variant', () => {
        render(<Button variant="secondary">Secondary</Button>);

        expect(screen.getByText('Secondary')).toBeVisible();
    });

    it('renders with outline variant', () => {
        render(<Button variant="outline">Outline</Button>);

        expect(screen.getByText('Outline')).toBeVisible();
    });

    it('renders with small size', () => {
        render(<Button size="sm">Small</Button>);

        expect(screen.getByText('Small')).toBeVisible();
    });

    it('renders with large size', () => {
        render(<Button size="lg">Large</Button>);

        expect(screen.getByText('Large')).toBeVisible();
    });

    it('handles click events', async () => {
        const handleClick = jest.fn();

        render(<Button onClick={handleClick}>Click me</Button>);

        await userEvent.click(screen.getByText('Click me'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders disabled state', () => {
        const { asFragment } = render(<Button disabled>Disabled</Button>);

        const button = screen.getByText('Disabled');

        expect(button).toBeDisabled();
        expect(asFragment()).toMatchSnapshot();
    });

    it('does not call onClick when disabled', async () => {
        const handleClick = jest.fn();

        render(
            <Button
                disabled
                onClick={handleClick}
            >
                Disabled
            </Button>
        );

        await userEvent.click(screen.getByText('Disabled'));

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<Button className="custom-class">Custom</Button>);

        const button = screen.getByText('Custom');

        expect(button).toHaveClass('custom-class');
    });
});
