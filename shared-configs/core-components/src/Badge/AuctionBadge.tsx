import { Badge } from './Badge';
import { DotOutline, Pause, VideoCamera } from '../Icons';
import { cn } from '@dbarrett24/theme-system';

type Props = {
    /** Optional className for custom styling and positioning */
    className?: string;
    /** Whether the auction has video streaming capabilities */
    hasVideo?: boolean;
    /** Whether the auction is currently closing */
    isClosing?: boolean;
    /** Whether the auction is currently paused */
    isPaused?: boolean;
    /** Number of viewers currently watching the auction */
    viewers: number;
};

/**
 * AuctionBadge displays the live or paused status of an auction with viewer count.
 *
 * This component shows a badge with auction status (LIVE/PAUSED/CLOSING), optional video camera icon,
 * viewer count with dot separator, and appropriate state indicators.
 *
 * @example
 * ```tsx
 * // Live auction with video
 * <AuctionBadge
 *   hasVideo={true}
 *   isClosing={false}
 *   isPaused={false}
 *   viewers={245}
 * />
 *
 * // Paused auction
 * <AuctionBadge
 *   isClosing={false}
 *   isPaused={true}
 *   viewers={132}
 * />
 *
 * // Closing auction
 * <AuctionBadge
 *   hasVideo={false}
 *   isClosing={true}
 *   isPaused={false}
 *   viewers={0}
 * />
 * ```
 */
export const AuctionBadge = ({ className, hasVideo, isClosing, isPaused, viewers = 1 }: Props) => {
    let statusText = isPaused ? 'PAUSED' : 'LIVE';
    if (isClosing) {
        statusText = 'CLOSING';
    }

    return (
        <Badge
            className={cn('hui-text-label-strong flex items-center gap-2xs', className)}
            color="critical"
            data-testid="auction-badge"
            emphasis="bold"
            iconStyle="fill"
            size="sm"
        >
            {!isPaused && !isClosing && hasVideo && (
                <VideoCamera
                    data-testid="video-camera-icon"
                    size="sm"
                    style="fill"
                />
            )}
            {isPaused && !isClosing && (
                <Pause
                    data-testid="pause-icon"
                    size="sm"
                    style="fill"
                />
            )}
            {statusText}
            {!isClosing && (
                <DotOutline
                    className="-mx-2xs"
                    size="sm"
                    style="fill"
                />
            )}
            <span>{!isClosing && viewers}</span>
        </Badge>
    );
};

AuctionBadge.displayName = 'AuctionBadge';
