import type { QueryClient } from '@tanstack/react-query';

/**
 * Initial state for testing components with providers
 */
export type InitialState = {
    /**
     * Additional provider options
     */
    [key: string]: unknown;

    /**
     * Custom app context values for testing
     */
    appContext?: Record<string, unknown>;

    /**
     * React Query client instance
     */
    queryClient?: QueryClient;
};
