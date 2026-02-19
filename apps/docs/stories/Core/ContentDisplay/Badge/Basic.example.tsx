import { Badge } from '@dbarrett24/core-components/Badge';

export const ExampleComponent = () => {
    return (
        <div className="relative h-[200px] w-[200px] bg-background-secondary">
            <Badge
                className="absolute left-[10px] top-[10px]"
                color="critical"
                emphasis="bold"
                round
            >
                Live
            </Badge>
        </div>
    );
};
