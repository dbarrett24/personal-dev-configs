import type { QueryClient } from '@tanstack/react-query';

/**
 * Initial state for testing components with providers
 */
export type InitialState = {
    /**
     * React Query client instance
     */
    queryClient?: QueryClient;

    /**
     * Custom app context values for testing
     */
    appContext?: Record<string, unknown>;

    /**
     * Additional provider options
     */
    [key: string]: unknown;
};

