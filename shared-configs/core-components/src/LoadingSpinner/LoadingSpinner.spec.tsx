import { LoadingSpinner } from './LoadingSpinner';
import { render, screen } from '@dbarrett24/testing-utils';

describe('LoadingSpinner', () => {
    it('should render with a default accessibility label', () => {
        render(<LoadingSpinner />);

        expect(screen.getByLabelText('Spinner Gap')).toBeVisible();
    });

    it('should allow a custom accessibility label', () => {
        render(<LoadingSpinner aria-label="Please wait..." />);

        expect(screen.getByLabelText('Please wait...')).toBeVisible();
    });

    it('should forward additional props to the icon', () => {
        render(
            <LoadingSpinner
                aria-label="Loading content"
                data-custom="test-value"
            />
        );

        const spinner = screen.getByLabelText('Loading content');
        expect(spinner).toHaveAttribute('data-custom', 'test-value');
    });

    it('should apply className to the wrapper element', () => {
        render(<LoadingSpinner className="custom-spinner" />);

        // eslint-disable-next-line testing-library/no-node-access
        const wrapper = screen.getByLabelText('Spinner Gap').parentElement;
        expect(wrapper).toHaveClass('custom-spinner');
    });
});
