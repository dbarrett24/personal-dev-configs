// Jest setup file - runs before all tests
import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/navigation', () => ({
    usePathname: () => '/',
    useRouter: () => ({
        back: jest.fn(),
        pathname: '/',
        prefetch: jest.fn(),
        push: jest.fn(),
        query: {},
        replace: jest.fn(),
    }),
    useSearchParams: () => new URLSearchParams(),
}));

// Mock environment variables if needed
process.env.NEXT_PUBLIC_API_URL = 'http://localhost:3000/api';
