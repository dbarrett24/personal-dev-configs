// Re-export everything from @testing-library/react
export * from '@testing-library/react';

// Export userEvent as a named export (modern RTL pattern)
export { default as userEvent } from '@testing-library/user-event';

// Custom render with providers
export { render } from './render';

// Types
export type { InitialState } from './types';

// Jotai store for testing
export { jotaiStore } from './jotaiStore';

// React Query mocks
export {
    querySuccessMock,
    queryLoadingMock,
    queryErrorMock,
    mutationSuccessMock,
    mutationLoadingMock,
    mutationErrorMock,
} from './useQueryMock';

// Form testing utilities
export { FormWrapper } from './FormWrapper';
