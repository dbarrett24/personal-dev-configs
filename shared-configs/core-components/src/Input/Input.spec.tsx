import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input', () => {
    it('should render with label', () => {
        render(<Input label="Email" />);

        expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('should associate label with input via htmlFor', () => {
        render(
            <Input
                label="Username"
                id="username-input"
            />
        );

        const input = screen.getByLabelText('Username');
        expect(input).toHaveAttribute('id', 'username-input');
    });

    it('should generate unique ID when not provided', () => {
        render(
            <>
                <Input label="First Name" />
                <Input label="Last Name" />
            </>
        );

        const firstInput = screen.getByLabelText('First Name');
        const lastInput = screen.getByLabelText('Last Name');

        expect(firstInput.id).toBeTruthy();
        expect(lastInput.id).toBeTruthy();
        expect(firstInput.id).not.toBe(lastInput.id);
    });

    it('should show required indicator', () => {
        render(
            <Input
                label="Email"
                isRequired={true}
            />
        );

        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('*')).toBeInTheDocument();
    });

    it('should handle disabled state', () => {
        render(
            <Input
                label="Email"
                isDisabled={true}
            />
        );

        const input = screen.getByLabelText('Email');
        expect(input).toBeDisabled();
    });

    it('should handle readonly state', () => {
        render(
            <Input
                label="Email"
                isReadOnly={true}
            />
        );

        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('readonly');
    });

    it('should display error message', () => {
        render(
            <Input
                label="Email"
                error="Invalid email"
            />
        );

        expect(screen.getByRole('alert')).toHaveTextContent('Invalid email');
    });

    it('should have aria-invalid when error is present', () => {
        render(
            <Input
                label="Email"
                error="Invalid email"
            />
        );

        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('should associate error with input via aria-describedby', () => {
        render(
            <Input
                label="Email"
                error="Invalid email"
                id="email-input"
            />
        );

        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('aria-describedby', expect.stringContaining('email-input-error'));
    });

    it('should display helper text', () => {
        render(
            <Input
                label="Password"
                helperText="Must be at least 8 characters"
            />
        );

        expect(screen.getByText('Must be at least 8 characters')).toBeInTheDocument();
    });

    it('should not display helper text when error is present', () => {
        render(
            <Input
                label="Password"
                helperText="Helper text"
                error="Error message"
            />
        );

        expect(screen.getByText('Error message')).toBeInTheDocument();
        expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
    });

    it('should visually hide label when hideLabel is true', () => {
        render(
            <Input
                label="Search"
                hideLabel={true}
            />
        );

        const label = screen.getByText('Search');
        expect(label).toHaveClass('sr-only');
    });

    it('should render start adornment', () => {
        render(
            <Input
                label="Search"
                startAdornment={<span>🔍</span>}
            />
        );

        expect(screen.getByText('🔍')).toBeInTheDocument();
    });

    it('should render end adornment', () => {
        render(
            <Input
                label="Password"
                endAdornment={<button type="button">Show</button>}
            />
        );

        // Button is wrapped in aria-hidden span, so we need to query by text
        expect(screen.getByText('Show')).toBeInTheDocument();
    });

    it('should handle onChange event', async () => {
        const handleChange = jest.fn();
        const user = userEvent.setup();

        render(
            <Input
                label="Email"
                onChange={handleChange}
            />
        );

        const input = screen.getByLabelText('Email');
        await user.type(input, 'test@example.com');

        expect(handleChange).toHaveBeenCalled();
    });

    it('should apply custom classNames', () => {
        render(
            <Input
                label="Email"
                testId="email-wrapper"
                wrapperClassName="wrapper-class"
                labelClassName="label-class"
                inputClassName="input-class"
            />
        );

        const wrapper = screen.getByTestId('email-wrapper');
        expect(wrapper).toHaveClass('wrapper-class');
    });

    it('should support testId', () => {
        render(
            <Input
                label="Email"
                testId="email-input"
            />
        );

        expect(screen.getByTestId('email-input')).toBeInTheDocument();
    });

    it('should mark as required with aria-required', () => {
        render(
            <Input
                label="Email"
                isRequired={true}
            />
        );

        const input = screen.getByRole('textbox');
        expect(input).toBeRequired();
        expect(input).toHaveAttribute('aria-required', 'true');
    });
});
