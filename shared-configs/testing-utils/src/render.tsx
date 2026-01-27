import { type ReactElement, type ReactNode } from 'react';
import { render as rtlRender, type RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import { jotaiStore } from './jotaiStore';
import type { InitialState } from './types';

type AllProvidersProps = {
    children: ReactNode;
    queryClient: QueryClient;
};

const AllProviders = ({ children, queryClient }: AllProvidersProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <JotaiProvider store={jotaiStore}>{children}</JotaiProvider>
        </QueryClientProvider>
    );
};

AllProviders.displayName = 'AllProviders';

/**
 * Create a QueryClient for testing with disabled retries
 */
const createTestQueryClient = () =>
    new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                gcTime: 0,
            },
            mutations: {
                retry: false,
                gcTime: 0,
            },
        },
    });

type CustomRenderOptions = Omit<RenderOptions, 'wrapper'> & {
    initialState?: InitialState;
};

/**
 * Custom render function with providers for React Query and Jotai
 *
 * @example
 * ```typescript
 * import { render, screen } from '@dbarrett24/testing-utils';
 *
 * it('renders component', () => {
 *     render(<MyComponent />);
 *     expect(screen.getByText('Hello')).toBeVisible();
 * });
 *
 * // With custom QueryClient
 * it('renders with custom query client', () => {
 *     const queryClient = new QueryClient();
 *     render(<MyComponent />, {
 *         initialState: { queryClient }
 *     });
 * });
 * ```
 */
export const render = (ui: ReactElement, options: CustomRenderOptions = {}): ReturnType<typeof rtlRender> & { queryClient: QueryClient } => {
    const { initialState, ...renderOptions } = options;

    const queryClient = initialState?.queryClient ?? createTestQueryClient();

    const Wrapper = ({ children }: { children: ReactNode }) => (
        <AllProviders queryClient={queryClient}>{children}</AllProviders>
    );

    Wrapper.displayName = 'TestWrapper';

    return {
        ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
        queryClient,
    };
};

