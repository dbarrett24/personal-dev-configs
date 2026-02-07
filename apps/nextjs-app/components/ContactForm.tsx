'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@dbarrett24/basketball-training-ui';

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof schema>;

export const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log('Form submitted:', data);
        alert('Form submitted successfully!');
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-md max-w-md mx-auto"
        >
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-2xs"
                >
                    Name
                </label>
                <input
                    {...register('name')}
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full px-md py-sm border border-border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-border-focus"
                />
                {errors.name && <p className="text-text-critical text-sm mt-2xs">{errors.name.message}</p>}
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2xs"
                >
                    Email
                </label>
                <input
                    {...register('email')}
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-md py-sm border border-border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-border-focus"
                />
                {errors.email && <p className="text-text-critical text-sm mt-2xs">{errors.email.message}</p>}
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2xs"
                >
                    Message
                </label>
                <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-md py-sm border border-border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-border-focus"
                />
                {errors.message && <p className="text-text-critical text-sm mt-2xs">{errors.message.message}</p>}
            </div>

            <Button
                type="submit"
                style="primary"
                isDisabled={isSubmitting}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
};

ContactForm.displayName = 'ContactForm';

