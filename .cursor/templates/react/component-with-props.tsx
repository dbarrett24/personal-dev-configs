/**
 * React Component with Props Template
 *
 * This template demonstrates proper TypeScript patterns for components with props.
 * Note: Use type (not interface) for props as per our coding standards.
 */

'use client';

import { useState } from 'react';

// ============================================
// Props Type Definition
// ============================================

type UserCardProps = {
    /** The user's display name */
    name: string;
    /** The user's email address */
    email: string;
    /** Optional avatar URL */
    avatarUrl?: string;
    /** Whether the card is in compact mode */
    isCompact?: boolean;
    /** Callback when card is clicked */
    onClick?: (userId: string) => void;
    /** Additional CSS classes */
    className?: string;
    /** Child content to render */
    children?: React.ReactNode;
};

// ============================================
// Component Implementation
// ============================================

export const UserCard = ({
    name,
    email,
    avatarUrl,
    isCompact = false,
    onClick,
    className = '',
    children,
}: UserCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (onClick) {
            onClick(email); // Using email as ID for this example
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    };

    return (
        <div
            className={`rounded-lg border p-4 ${isCompact ? 'py-2' : 'py-4'} ${
                onClick ? 'cursor-pointer hover:shadow-md' : ''
            } ${className}`}
            onClick={onClick ? handleClick : undefined}
            onKeyDown={onClick ? handleKeyDown : undefined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            aria-label={onClick ? `Select ${name}` : undefined}
        >
            <div className="flex items-center gap-3">
                {avatarUrl && (
                    <img
                        src={avatarUrl}
                        alt={`${name}'s avatar`}
                        className={`rounded-full ${isCompact ? 'h-8 w-8' : 'h-12 w-12'}`}
                    />
                )}
                <div>
                    <h3 className={`font-semibold ${isCompact ? 'text-sm' : 'text-base'}`}>
                        {name}
                    </h3>
                    {!isCompact && (
                        <p className="text-sm text-gray-600">{email}</p>
                    )}
                </div>
            </div>
            {children && <div className="mt-3">{children}</div>}
        </div>
    );
};

UserCard.displayName = 'UserCard';

// ============================================
// Usage Examples
// ============================================

/*
// Basic usage
<UserCard
    name="John Doe"
    email="john@example.com"
/>

// With all props
<UserCard
    name="Jane Smith"
    email="jane@example.com"
    avatarUrl="/avatars/jane.jpg"
    isCompact={false}
    onClick={(userId) => console.log('Selected:', userId)}
    className="my-4"
>
    <p>Additional content</p>
</UserCard>

// Compact mode
<UserCard
    name="Bob Wilson"
    email="bob@example.com"
    isCompact
/>
*/
