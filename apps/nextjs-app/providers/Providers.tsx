'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import { type ReactNode, useState } from 'react';

type ProvidersProps = {
    children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        staleTime: 60 * 1000, // 1 minute
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>
            <JotaiProvider>{children}</JotaiProvider>
        </QueryClientProvider>
    );
};

Providers.displayName = 'Providers';
