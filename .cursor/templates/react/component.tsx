/**
 * Basic React Component Template
 *
 * This template shows the minimal structure for a React component.
 * Use this as a starting point for simple components.
 */

'use client';

// ============================================
// Simple Component (No Props)
// ============================================

export const SimpleComponent = () => {
    return (
        <div className="p-4">
            <h1>Hello World</h1>
        </div>
    );
};

SimpleComponent.displayName = 'SimpleComponent';

// ============================================
// Component with State
// ============================================

import { useState } from 'react';

export const StatefulComponent = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className="flex flex-col gap-4 p-4">
            <p>Count: {count}</p>
            <button
                onClick={handleIncrement}
                className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
                Increment
            </button>
        </div>
    );
};

StatefulComponent.displayName = 'StatefulComponent';

// ============================================
// Component with Effects
// ============================================

import { useState, useEffect } from 'react';

export const EffectComponent = () => {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        // Simulated data fetch
        const timer = setTimeout(() => {
            setData('Data loaded!');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!data) {
        return <div className="p-4">Loading...</div>;
    }

    return (
        <div className="p-4">
            <p>{data}</p>
        </div>
    );
};

EffectComponent.displayName = 'EffectComponent';

// ============================================
// Component with Early Return Pattern
// ============================================

type ConditionalComponentProps = {
    isAuthorized: boolean;
};

export const ConditionalComponent = ({ isAuthorized }: ConditionalComponentProps) => {
    // Early return for unauthorized users
    if (!isAuthorized) {
        return (
            <div className="p-4">
                <p className="text-red-500">You do not have permission to view this content.</p>
            </div>
        );
    }

    // Main component render
    return (
        <div className="p-4">
            <h2>Protected Content</h2>
            <p>This content is only visible to authorized users.</p>
        </div>
    );
};

ConditionalComponent.displayName = 'ConditionalComponent';
