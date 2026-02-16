'use client';

import { Button } from '@dbarrett24/basketball-training-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
});

type ContactFormData = z.infer<typeof schema>;

export const ContactForm = () => {
    const {
        formState: { errors, isSubmitting },
        handleSubmit,
        register,
        reset,
    } = useForm<ContactFormData>({
        defaultValues: {
            email: '',
            message: '',
            name: '',
        },
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: ContactFormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // eslint-disable-next-line no-console
        console.log('Form submitted:', data);
        alert('Form submitted successfully!');
        reset();
    };

    return (
        <form
            className="mx-auto flex max-w-md flex-col gap-md"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <label
                    className="mb-2xs block text-sm font-medium text-text-primary"
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    {...register('name')}
                    className="focus:ring-border-focus w-full rounded-md border border-border-primary px-md py-sm focus:outline-none focus:ring-2"
                    id="name"
                    placeholder="Your name"
                    type="text"
                />
                {errors.name && <p className="mt-2xs text-sm text-text-critical">{errors.name.message}</p>}
            </div>

            <div>
                <label
                    className="mb-2xs block text-sm font-medium text-text-primary"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    {...register('email')}
                    className="focus:ring-border-focus w-full rounded-md border border-border-primary px-md py-sm focus:outline-none focus:ring-2"
                    id="email"
                    placeholder="you@example.com"
                    type="email"
                />
                {errors.email && <p className="mt-2xs text-sm text-text-critical">{errors.email.message}</p>}
            </div>

            <div>
                <label
                    className="mb-2xs block text-sm font-medium text-text-primary"
                    htmlFor="message"
                >
                    Message
                </label>
                <textarea
                    {...register('message')}
                    className="focus:ring-border-focus w-full rounded-md border border-border-primary px-md py-sm focus:outline-none focus:ring-2"
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                />
                {errors.message && <p className="mt-2xs text-sm text-text-critical">{errors.message.message}</p>}
            </div>

            <Button
                disabled={isSubmitting}
                style="primary"
                type="submit"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
};

ContactForm.displayName = 'ContactForm';
