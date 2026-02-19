import { Badge } from '@dbarrett24/core-components/Badge';
import { Bell, HeartStraight, Trash } from '@dbarrett24/core-components/Icons';

export const ExampleComponent = () => {
    return (
        <div className="flex flex-wrap gap-2">
            <Badge>Live</Badge>
            <Badge iconLeft={HeartStraight}>Live</Badge>
            <Badge iconRight={Trash}>Live</Badge>
            <Badge
                iconLeft={Bell}
                iconRight={Trash}
            >
                Live
            </Badge>
            <Badge iconLeft={Bell} />
            {/* Either works */}
            <Badge iconRight={HeartStraight} />
        </div>
    );
};
