# @dbarrett24/testing-utils

Testing utilities and helpers for React applications with Jotai, React Query, and React Hook Form.

## Installation

```bash
pnpm add -D @dbarrett24/testing-utils @testing-library/react @testing-library/jest-dom @testing-library/user-event jest
```

## Features

- **Custom render** with React Query and Jotai providers
- **Direct Jotai store access** for setting/getting atoms in tests
- **React Query mocks** for query and mutation states
- **FormWrapper** for testing components that use React Hook Form
- **Re-exports** all React Testing Library utilities

## Usage

### Basic Rendering

```typescript
import { render, screen } from '@dbarrett24/testing-utils';

it('renders component', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello World')).toBeVisible();
});
```

### With User Interactions

```typescript
import { render, screen, userEvent } from '@dbarrett24/testing-utils';

it('handles click', async () => {
    render(<Button />);
    
    await userEvent.click(screen.getByText('Click me'));
    
    expect(screen.getByText('Clicked!')).toBeVisible();
});
```

### Testing with Jotai Atoms

```typescript
import { render, screen, jotaiStore } from '@dbarrett24/testing-utils';
import { userAtom } from '@/atoms/user';

it('uses jotai atom value', () => {
    // Set atom value directly in test
    jotaiStore.set(userAtom, { id: '1', name: 'John' });
    
    render(<UserProfile />);
    
    expect(screen.getByText('John')).toBeVisible();
});

it('reads atom value in test', () => {
    render(<UserForm />);
    
    // Interact with component
    userEvent.type(screen.getByLabelText('Name'), 'Jane');
    userEvent.click(screen.getByText('Save'));
    
    // Read atom value directly
    const user = jotaiStore.get(userAtom);
    expect(user.name).toBe('Jane');
});
```

### Testing with React Query

```typescript
import { render, screen, querySuccessMock, queryLoadingMock, queryErrorMock } from '@dbarrett24/testing-utils';
import * as hooks from '@/data/useGetUser';

const useGetUserSpy = jest.spyOn(hooks, 'useGetUser');

it('renders loading state', () => {
    useGetUserSpy.mockReturnValue(queryLoadingMock);
    
    render(<UserProfile userId="1" />);
    
    expect(screen.getByText('Loading...')).toBeVisible();
});

it('renders success state', () => {
    useGetUserSpy.mockReturnValue({
        ...querySuccessMock,
        data: { id: '1', name: 'John' }
    });
    
    render(<UserProfile userId="1" />);
    
    expect(screen.getByText('John')).toBeVisible();
});

it('renders error state', () => {
    useGetUserSpy.mockReturnValue(queryErrorMock);
    
    render(<UserProfile userId="1" />);
    
    expect(screen.getByText('Error loading user')).toBeVisible();
});
```

### Testing Forms with React Hook Form

```typescript
import { render, screen, FormWrapper, userEvent } from '@dbarrett24/testing-utils';

// Component using useFormContext
const EmailField = () => {
    const { register } = useFormContext();
    return <input {...register('email')} />;
};

it('renders form field with default value', () => {
    render(
        <FormWrapper defaultValues={{ email: 'test@example.com' }}>
            <EmailField />
        </FormWrapper>
    );
    
    expect(screen.getByDisplayValue('test@example.com')).toBeVisible();
});

it('handles form input', async () => {
    render(
        <FormWrapper defaultValues={{ email: '' }}>
            <EmailField />
        </FormWrapper>
    );
    
    await userEvent.type(screen.getByRole('textbox'), 'new@example.com');
    
    expect(screen.getByDisplayValue('new@example.com')).toBeVisible();
});
```

### Custom QueryClient

```typescript
import { render, screen } from '@dbarrett24/testing-utils';
import { QueryClient } from '@tanstack/react-query';

it('uses custom query client', () => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { staleTime: 10000 }
        }
    });
    
    const { queryClient: returnedClient } = render(<MyComponent />, {
        initialState: { queryClient }
    });
    
    expect(returnedClient).toBe(queryClient);
});
```

## API Reference

### `render(ui, options)`

Custom render function that wraps components with React Query and Jotai providers.

**Parameters:**
- `ui` - React element to render
- `options.initialState` - Optional initial state configuration
  - `queryClient` - Custom QueryClient instance

**Returns:**
- All React Testing Library render results
- `queryClient` - The QueryClient instance used

### `jotaiStore`

Jotai store instance for direct atom access in tests.

**Methods:**
- `get(atom)` - Get current atom value
- `set(atom, value)` - Set atom value

### React Query Mocks

Pre-configured mock objects for React Query hooks:

- `querySuccessMock` - Success state for useQuery
- `queryLoadingMock` - Loading state for useQuery
- `queryErrorMock` - Error state for useQuery
- `mutationSuccessMock` - Success state for useMutation
- `mutationLoadingMock` - Loading state for useMutation
- `mutationErrorMock` - Error state for useMutation

### `FormWrapper`

Wrapper component that provides React Hook Form context for testing.

**Props:**
- `children` - Components to render
- `defaultValues` - Default form values
- `formOptions` - Additional useForm options

## Best Practices

### 1. Use Direct Queries

```typescript
// ✅ Good - direct query
expect(screen.getByText('Submit')).toBeVisible();

// ❌ Avoid - unnecessary variable
const button = screen.getByText('Submit');
expect(button).toBeVisible();
```

### 2. Prefer toBeVisible()

```typescript
// ✅ Good - tests actual visibility
expect(screen.getByText('Hello')).toBeVisible();

// ❌ Avoid - only tests DOM presence
expect(screen.getByText('Hello')).toBeInTheDocument();
```

### 3. Mock at the Hook Level

```typescript
// ✅ Good - spy on the hook
const useGetUserSpy = jest.spyOn(hooks, 'useGetUser');
useGetUserSpy.mockReturnValue({ ...querySuccessMock, data: mockUser });

// ❌ Avoid - mocking fetch directly
global.fetch = jest.fn();
```

### 4. Use userEvent for Interactions

```typescript
// ✅ Good - simulates real user interactions
await userEvent.click(screen.getByText('Submit'));
await userEvent.type(screen.getByRole('textbox'), 'Hello');

// ❌ Avoid - fireEvent doesn't simulate real events
fireEvent.click(screen.getByText('Submit'));
```

## License

MIT

