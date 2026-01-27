# @dbarrett24/jest-config

Shared Jest configuration for React/Next.js applications with 90%+ coverage thresholds.

## Installation

```bash
pnpm add -D @dbarrett24/jest-config jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

## Usage

Create `jest.config.js` in your project root:

```javascript
const baseConfig = require('@dbarrett24/jest-config');

module.exports = {
    ...baseConfig,
    // Override or extend as needed
};
```

## Setup Files

Create `testing/setupTests.ts`:

```typescript
import '@testing-library/jest-dom';

// Add any global test setup here
```

Create mock files:

```javascript
// testing/__mocks__/styleMock.js
module.exports = {};

// testing/__mocks__/fileMock.js
module.exports = 'test-file-stub';
```

## Features

### Automatic Mock Clearing

```typescript
// ✅ Mocks automatically cleared between tests
beforeEach(() => {
    // No need for jest.clearAllMocks()
});
```

### Path Aliases

```typescript
// Use @/* imports in tests
import { MyComponent } from '@/components/MyComponent';
```

### Coverage Thresholds

- **90% minimum** across all metrics (branches, functions, lines, statements)
- Coverage collected from `src/` directory
- Excludes stories, tests, and mocks

### Test Environment

- **jsdom** for DOM testing
- React Testing Library setup
- jest-dom matchers included

## Scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:update": "jest -u"
  }
}
```

## Customization

### Adjust Coverage Thresholds

```javascript
const baseConfig = require('@dbarrett24/jest-config');

module.exports = {
    ...baseConfig,
    coverageThreshold: {
        global: {
            branches: 85,
            functions: 85,
            lines: 85,
            statements: 85,
        },
    },
};
```

### Add Custom Module Mappings

```javascript
const baseConfig = require('@dbarrett24/jest-config');

module.exports = {
    ...baseConfig,
    moduleNameMapper: {
        ...baseConfig.moduleNameMapper,
        '^@components/(.*)$': '<rootDir>/src/components/$1',
    },
};
```

### Exclude Files from Coverage

```javascript
const baseConfig = require('@dbarrett24/jest-config');

module.exports = {
    ...baseConfig,
    collectCoverageFrom: [
        ...baseConfig.collectCoverageFrom,
        '!src/generated/**',
    ],
};
```

## Testing Best Practices

### Use React Testing Library

```typescript
import { render, screen, userEvent } from '@testing-library/react';

it('handles user interaction', async () => {
    const user = userEvent.setup();
    render(<MyComponent />);
    
    await user.click(screen.getByRole('button'));
    
    expect(screen.getByText('Success')).toBeVisible();
});
```

### Prefer .toBeVisible()

```typescript
// ✅ Good - tests actual visibility
expect(screen.getByText('Hello')).toBeVisible();

// ❌ Avoid - only checks DOM presence
expect(screen.getByText('Hello')).toBeInTheDocument();
```

### No jest.clearAllMocks()

```typescript
// ❌ Don't do this - it's automatic
afterEach(() => {
    jest.clearAllMocks();
});

// ✅ Mocks are automatically cleared
```

## License

MIT

