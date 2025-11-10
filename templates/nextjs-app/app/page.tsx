import { Button } from '@yourname/basketball-training-ui';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-lg">
            <div className="max-w-2xl text-center">
                <h1 className="mb-lg text-4xl font-bold text-text-primary">
                    Next.js App Template
                </h1>
                <p className="mb-xl text-lg text-text-secondary">
                    Built with @yourname/basketball-training-ui, React Query, Jotai, and React Hook Form
                </p>
                <div className="flex gap-md justify-center">
                    <Button variant="primary">Get Started</Button>
                    <Button variant="secondary">Learn More</Button>
                    <Button variant="outline">View Docs</Button>
                </div>
            </div>
        </main>
    );
}

