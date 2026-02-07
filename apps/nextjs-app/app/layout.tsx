import { Providers } from '@/providers/Providers';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    description: 'Built with @dbarrett24/basketball-training-ui',
    title: 'Next.js App Template',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
