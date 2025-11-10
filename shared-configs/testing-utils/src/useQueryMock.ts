/**
 * Mock data for React Query useQuery hook - Success state
 */
export const querySuccessMock = {
    data: undefined,
    error: null,
    isError: false,
    isLoading: false,
    isSuccess: true,
    status: 'success' as const,
    fetchStatus: 'idle' as const,
    refetch: jest.fn(),
    isRefetching: false,
    isFetching: false,
    isPending: false,
    isLoadingError: false,
    isRefetchError: false,
    isStale: false,
    isPlaceholderData: false,
};

/**
 * Mock data for React Query useQuery hook - Loading state
 */
export const queryLoadingMock = {
    data: undefined,
    error: null,
    isError: false,
    isLoading: true,
    isSuccess: false,
    status: 'pending' as const,
    fetchStatus: 'fetching' as const,
    refetch: jest.fn(),
    isRefetching: false,
    isFetching: true,
    isPending: true,
    isLoadingError: false,
    isRefetchError: false,
    isStale: false,
    isPlaceholderData: false,
};

/**
 * Mock data for React Query useQuery hook - Error state
 */
export const queryErrorMock = {
    data: undefined,
    error: new Error('Test error'),
    isError: true,
    isLoading: false,
    isSuccess: false,
    status: 'error' as const,
    fetchStatus: 'idle' as const,
    refetch: jest.fn(),
    isRefetching: false,
    isFetching: false,
    isPending: false,
    isLoadingError: true,
    isRefetchError: false,
    isStale: false,
    isPlaceholderData: false,
};

/**
 * Mock data for React Query useMutation hook - Success state
 */
export const mutationSuccessMock = {
    data: undefined,
    error: null,
    isError: false,
    isIdle: false,
    isPending: false,
    isSuccess: true,
    status: 'success' as const,
    mutate: jest.fn(),
    mutateAsync: jest.fn(),
    reset: jest.fn(),
    variables: undefined,
    context: undefined,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    submittedAt: 0,
};

/**
 * Mock data for React Query useMutation hook - Loading state
 */
export const mutationLoadingMock = {
    data: undefined,
    error: null,
    isError: false,
    isIdle: false,
    isPending: true,
    isSuccess: false,
    status: 'pending' as const,
    mutate: jest.fn(),
    mutateAsync: jest.fn(),
    reset: jest.fn(),
    variables: undefined,
    context: undefined,
    failureCount: 0,
    failureReason: null,
    isPaused: false,
    submittedAt: Date.now(),
};

/**
 * Mock data for React Query useMutation hook - Error state
 */
export const mutationErrorMock = {
    data: undefined,
    error: new Error('Test mutation error'),
    isError: true,
    isIdle: false,
    isPending: false,
    isSuccess: false,
    status: 'error' as const,
    mutate: jest.fn(),
    mutateAsync: jest.fn(),
    reset: jest.fn(),
    variables: undefined,
    context: undefined,
    failureCount: 1,
    failureReason: new Error('Test mutation error'),
    isPaused: false,
    submittedAt: Date.now(),
};

