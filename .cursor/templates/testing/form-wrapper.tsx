/**
 * FormWrapper for testing React Hook Form components.
 *
 * This pattern allows you to test form components that use useFormContext
 * by providing them with the necessary FormProvider context.
 */

import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';

// ============================================
// Generic FormWrapper Component
// ============================================

export const FormWrapper = <T extends Record<string, unknown>>({
    children,
    defaultValues,
}: {
    children: React.ReactNode;
    defaultValues: T;
}) => {
    const methods = useForm<T>({ defaultValues });
    return <FormProvider {...methods}>{children}</FormProvider>;
};

// ============================================
// Usage Example in Tests
// ============================================

/*
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider, UseFormReturn } from 'react-hook-form';
import { MyFormComponent } from './MyFormComponent';

// Define your form data type
type FormData = {
    title: string;
    amount: number;
    email: string;
};

describe('MyFormComponent', () => {
    // Hold reference to form methods for assertions
    let methods: UseFormReturn<FormData>;

    // Create wrapper that captures methods
    const FormWrapper = ({
        children,
        defaultValues,
    }: {
        children: React.ReactNode;
        defaultValues: FormData;
    }) => {
        methods = useForm<FormData>({ defaultValues, mode: 'onBlur' });
        return <FormProvider {...methods}>{children}</FormProvider>;
    };

    let defaultValues: FormData;

    const getRender = () =>
        render(
            <FormWrapper defaultValues={defaultValues}>
                <MyFormComponent />
            </FormWrapper>
        );

    beforeEach(() => {
        defaultValues = {
            title: '',
            amount: 0,
            email: '',
        };
    });

    it('renders form fields', () => {
        getRender();
        expect(screen.getByLabelText(/title/i)).toBeVisible();
        expect(screen.getByLabelText(/amount/i)).toBeVisible();
    });

    it('updates form values on input', async () => {
        const user = userEvent.setup();
        getRender();

        await user.type(screen.getByLabelText(/title/i), 'Test Title');

        // Access captured form methods to verify state
        await waitFor(() => {
            expect(methods.getValues('title')).toBe('Test Title');
        });
    });

    it('shows validation errors', async () => {
        const user = userEvent.setup();
        getRender();

        // Trigger validation by focusing and blurring empty required field
        const titleInput = screen.getByLabelText(/title/i);
        await user.click(titleInput);
        await user.tab();

        await waitFor(() => {
            expect(screen.getByText(/title is required/i)).toBeVisible();
        });
    });

    it('submits form with correct data', async () => {
        const user = userEvent.setup();
        const handleSubmit = jest.fn();
        getRender();

        // Fill form
        await user.type(screen.getByLabelText(/title/i), 'My Title');
        await user.type(screen.getByLabelText(/amount/i), '100');
        await user.type(screen.getByLabelText(/email/i), 'test@example.com');

        // Submit
        await user.click(screen.getByRole('button', { name: /submit/i }));

        await waitFor(() => {
            expect(handleSubmit).toHaveBeenCalledWith({
                title: 'My Title',
                amount: 100,
                email: 'test@example.com',
            });
        });
    });

    it('can set form values programmatically', async () => {
        getRender();

        // Use act to wrap state updates
        await act(async () => {
            methods.setValue('title', 'Programmatic Title');
        });

        expect(screen.getByLabelText(/title/i)).toHaveValue('Programmatic Title');
    });
});
*/

// ============================================
// FormWrapper with Validation Schema
// ============================================

/*
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    amount: z.number().min(0, 'Amount must be positive'),
    email: z.string().email('Invalid email address'),
});

type FormData = z.infer<typeof formSchema>;

const FormWrapperWithValidation = ({
    children,
    defaultValues,
}: {
    children: React.ReactNode;
    defaultValues: FormData;
}) => {
    const methods = useForm<FormData>({
        defaultValues,
        resolver: zodResolver(formSchema),
        mode: 'onBlur', // Validate on blur for production, 'all' for comprehensive test coverage
    });
    return <FormProvider {...methods}>{children}</FormProvider>;
};
*/
