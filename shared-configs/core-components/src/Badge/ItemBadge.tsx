import { Badge } from './Badge';
import { DotOutline } from '../Icons';
import { cn } from '@dbarrett24/theme-system';

type Props = {
    /** Optional className for custom styling and positioning */
    className?: string;
    /** Whether the item bidding has been extended */
    isExtended?: boolean;
    /** Whether the item is featured */
    isFeatured?: boolean;
    /** Whether the item is currently live */
    isLive?: boolean;
    /** Whether the item has been sold */
    isSold?: boolean;
    /** Number of viewers currently watching (only shown when isLive and > 0) */
    viewers?: number;
};

/**
 * ItemBadge displays the status of an auction item.
 *
 * This component shows a badge with item status (FEATURED/LIVE/EXTENDED/SOLD), optional viewer count
 * for live items, and appropriate styling based on the status.
 *
 * Priority order: isSold > isExtended > isLive > isFeatured
 *
 * @example
 * ```tsx
 * // Featured item
 * <ItemBadge isFeatured={true} />
 *
 * // Live item with viewers
 * <ItemBadge isLive={true} viewers={126} />
 *
 * // Extended item
 * <ItemBadge isExtended={true} />
 *
 * // Sold item
 * <ItemBadge isSold={true} />
 * ```
 */
export const ItemBadge = ({ className, isExtended, isFeatured, isLive, isSold, viewers }: Props) => {
    // Priority order: isSold > isExtended > isLive > isFeatured
    let text: string | null = null;
    let color: 'neutral' | 'critical' = 'neutral';
    let emphasis: 'bold' | 'subtle' = 'bold';
    let showViewerCount = false;

    if (isSold) {
        text = 'SOLD';
        color = 'neutral';
        emphasis = 'bold';
    } else if (isExtended) {
        text = 'EXTENDED';
        color = 'critical';
        emphasis = 'bold';
    } else if (isLive) {
        text = 'LIVE';
        color = 'critical';
        emphasis = 'bold';
        showViewerCount = viewers !== undefined && viewers > 0;
    } else if (isFeatured) {
        text = 'FEATURED';
        color = 'neutral';
        emphasis = 'subtle';
    }

    if (!text) {
        return null;
    }

    return (
        <Badge
            className={cn('hui-text-label-strong', { 'flex items-center gap-2xs': showViewerCount }, className)}
            color={color}
            data-testid="item-badge"
            emphasis={emphasis}
            size="sm"
        >
            {text}
            {showViewerCount && (
                <>
                    <DotOutline
                        className="-mx-2xs"
                        size="sm"
                        style="fill"
                    />
                    <span>{viewers}</span>
                </>
            )}
        </Badge>
    );
};

ItemBadge.displayName = 'ItemBadge';
