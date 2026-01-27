import { type ReactNode } from 'react';
import { FormProvider, useForm, type UseFormProps } from 'react-hook-form';

type FormWrapperProps<TFormValues extends Record<string, unknown>> = {
    children: ReactNode;
    defaultValues?: TFormValues;
    formOptions?: UseFormProps<TFormValues>;
};

/**
 * FormWrapper for testing components that use React Hook Form's useFormContext
 *
 * @example
 * ```typescript
 * import { render, FormWrapper } from '@dbarrett24/testing-utils';
 *
 * it('renders form field', () => {
 *     render(
 *         <FormWrapper defaultValues={{ email: 'test@example.com' }}>
 *             <EmailField />
 *         </FormWrapper>
 *     );
 *
 *     expect(screen.getByDisplayValue('test@example.com')).toBeVisible();
 * });
 * ```
 */
export const FormWrapper = <TFormValues extends Record<string, unknown>>({
    children,
    defaultValues,
    formOptions,
}: FormWrapperProps<TFormValues>) => {
    const methods = useForm<TFormValues>({
        defaultValues,
        ...formOptions,
    });

    return <FormProvider {...methods}>{children}</FormProvider>;
};

FormWrapper.displayName = 'FormWrapper';

