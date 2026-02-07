/**
 * Mock data for React Query useQuery hook - Success state
 */
export const querySuccessMock = {
    data: undefined,
    error: null,
    fetchStatus: 'idle' as const,
    isError: false,
    isFetching: false,
    isLoading: false,
    isLoadingError: false,
    isPending: false,
    isPlaceholderData: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: true,
    refetch: jest.fn(),
    status: 'success' as const,
};

/**
 * Mock data for React Query useQuery hook - Loading state
 */
export const queryLoadingMock = {
    data: undefined,
    error: null,
    fetchStatus: 'fetching' as const,
    isError: false,
    isFetching: true,
    isLoading: true,
    isLoadingError: false,
    isPending: true,
    isPlaceholderData: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: false,
    refetch: jest.fn(),
    status: 'pending' as const,
};

/**
 * Mock data for React Query useQuery hook - Error state
 */
export const queryErrorMock = {
    data: undefined,
    error: new Error('Test error'),
    fetchStatus: 'idle' as const,
    isError: true,
    isFetching: false,
    isLoading: false,
    isLoadingError: true,
    isPending: false,
    isPlaceholderData: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: false,
    refetch: jest.fn(),
    status: 'error' as const,
};

/**
 * Mock data for React Query useMutation hook - Success state
 */
export const mutationSuccessMock = {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    failureReason: null,
    isError: false,
    isIdle: false,
    isPaused: false,
    isPending: false,
    isSuccess: true,
    mutate: jest.fn(),
    mutateAsync: jest.fn(),
    reset: jest.fn(),
    status: 'success' as const,
    submittedAt: 0,
    variables: undefined,
};

/**
 * Mock data for React Query useMutation hook - Loading state
 */
export const mutationLoadingMock = {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    failureReason: null,
    isError: false,
    isIdle: false,
    isPaused: false,
    isPending: true,
    isSuccess: false,
    mutate: jest.fn(),
    mutateAsync: jest.fn(),
    reset: jest.fn(),
    status: 'pending' as const,
    submittedAt: Date.now(),
    variables: undefined,
};

/**
 * Mock data for React Query useMutation hook - Error state
 */
export const mutationErrorMock = {
    context: undefined,
    data: undefined,
    error: new Error('Test mutation error'),
    failureCount: 1,
    failureReason: new Error('Test mutation error'),
    isError: true,
    isIdle: false,
    isPaused: false,
    isPending: false,
    isSuccess: false,
    mutate: jest.fn(),
    mutateAsync: jest.fn(),
    reset: jest.fn(),
    status: 'error' as const,
    submittedAt: Date.now(),
    variables: undefined,
};
