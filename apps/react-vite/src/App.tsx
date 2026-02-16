import { Button } from '@dbarrett24/basketball-training-ui';

export const App = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background-primary p-lg">
            <div className="max-w-2xl text-center">
                <h1 className="mb-lg text-4xl font-bold text-text-primary">React + Vite Template</h1>
                <p className="mb-xl text-lg text-text-secondary">
                    Built with @dbarrett24/basketball-training-ui, React Query, Jotai, and React Hook Form
                </p>
                <div className="flex justify-center gap-md">
                    <Button style="primary">Get Started</Button>
                    <Button style="neutral">Learn More</Button>
                    <Button
                        style="primary"
                        variant="outlined"
                    >
                        View Docs
                    </Button>
                </div>
            </div>
        </div>
    );
};

App.displayName = 'App';
