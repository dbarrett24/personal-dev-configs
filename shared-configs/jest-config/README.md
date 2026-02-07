# @dbarrett24/jest-config

Shared Jest configuration for React/Next.js applications in the monorepo.

## Features

- ✅ **Fast test execution** with @swc/jest (20-30x faster than babel-jest)
- ✅ **Automatic JSX runtime** (no React imports needed)
- ✅ **jsdom environment** for React component testing
- ✅ **Coverage thresholds** (90% for apps)
- ✅ **Path alias support** (`@/*` mapped to `src/*`)
- ✅ **Asset mocking** (CSS, images)

## Usage

### In Your Package

1. **Install the config**:
   ```json
   {
     "devDependencies": {
       "@dbarrett24/jest-config": "workspace:*",
       "jest": "^29.7.0"
     }
   }
   ```

2. **Create `jest.config.js`**:
   ```javascript
   module.exports = require('@dbarrett24/jest-config');
   ```

3. **Create test setup file** at `testing/setupTests.ts`:
   ```typescript
   import '@testing-library/jest-dom';
   ```

4. **Add test scripts** to `package.json`:
   ```json
   {
     "scripts": {
       "test": "jest",
       "test:watch": "jest --watch",
       "test:coverage": "jest --coverage"
     }
   }
   ```

### Extending the Configuration

If you need to customize the config:

```javascript
const baseConfig = require('@dbarrett24/jest-config');

module.exports = {
    ...baseConfig,
    displayName: 'my-app',
    // Add your overrides here
    testPathIgnorePatterns: [
        ...baseConfig.testPathIgnorePatterns,
        '/custom-folder/',
    ],
};
```

## Configuration Details

### Test Environment
- **Environment**: `jsdom` (for React/DOM testing)
- **Setup**: Loads `testing/setupTests.ts` after environment setup

### Coverage Thresholds
- **Statements**: 90%
- **Branches**: 90%
- **Functions**: 90%
- **Lines**: 90%

### Path Aliases
- `@/*` → `<rootDir>/src/*`

### Asset Mocking
- CSS files → `testing/__mocks__/styleMock.js`
- Images → `testing/__mocks__/fileMock.js`

### File Transform
Uses `@swc/jest` with automatic JSX runtime:
```javascript
transform: {
    '^.+\\.(t|j)sx?$': [
        '@swc/jest',
        {
            jsc: {
                transform: {
                    react: {
                        runtime: 'automatic', // No React imports needed!
                    },
                },
            },
        },
    ],
}
```

## Library Configuration

For component libraries, use `@dbarrett24/jest-config-library` instead. It extends this config with:
- Higher coverage thresholds (95%)
- Additional ignore patterns for Storybook
- Library-specific display name

## Testing Patterns

### Component Tests

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
    it('renders correctly', () => {
        render(<MyComponent title="Hello" />);
        expect(screen.getByText('Hello')).toBeVisible();
    });

    it('handles click events', async () => {
        const handleClick = jest.fn();
        render(<MyComponent onClick={handleClick} />);
        
        await userEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
```

### No React Imports Needed

Thanks to @swc/jest with automatic JSX runtime:

```typescript
// ✅ CORRECT - No React import
import { render } from '@testing-library/react';
import { Button } from './Button';

// ❌ WRONG - Don't import React
import React from 'react';
```

## Troubleshooting

### "React is not defined" error

If you see this error, your @swc/jest transform is not configured correctly. Ensure your `jest.config.js` includes the `react.runtime: 'automatic'` setting.

### Coverage thresholds not enforced

Make sure you're running `jest --coverage` to enable coverage checks.

### Path aliases not working

Verify your `tsconfig.json` has matching path mappings:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Performance

**@swc/jest vs babel-jest**:
- ✅ 20-30x faster test execution
- ✅ No Babel dependencies required
- ✅ Rust-based transpilation
- ✅ Native TypeScript & JSX support

## Related Packages

- `@dbarrett24/jest-config-library` - For component libraries (95% coverage)
- `@dbarrett24/testing-utils` - Shared test utilities and mocks
- `@dbarrett24/typescript-config` - TypeScript configurations

## Migration from babel-jest

If migrating from an older setup with babel-jest:

1. Remove Babel dependencies:
   ```bash
   pnpm remove babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript
   ```

2. Install @swc packages (already in this config):
   ```bash
   pnpm install
   ```

3. Remove React imports from component files:
   ```typescript
   // Before
   import React from 'react';
   
   // After
   // (remove the import)
   ```

4. Run tests to verify:
   ```bash
   pnpm test
   ```

## License

MIT
