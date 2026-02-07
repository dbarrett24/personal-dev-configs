'use client';

import { type ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';

type ProvidersProps = {
    children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1 minute
                        refetchOnWindowFocus: false,
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

