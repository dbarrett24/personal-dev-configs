# @yourname/jest-config-library

Shared Jest configuration for React component libraries with stricter 95%+ coverage thresholds.

## Installation

```bash
pnpm add -D @yourname/jest-config-library jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

## Usage

Create `jest.config.js` in your library root:

```javascript
const baseConfig = require('@yourname/jest-config-library');

module.exports = {
    ...baseConfig,
    // Override as needed
};
```

## What's Different from @yourname/jest-config

### Higher Coverage Thresholds

- **95% minimum** (vs 90% for apps)
- Published libraries should be exceptionally well-tested

### Additional Exclusions

Automatically excludes:
- `index.ts` files (often just re-exports)
- `types.ts` files (type-only, no runtime code)
- Storybook static builds

### Display Name

Includes library-specific display name for easier debugging in monorepos.

## Setup

Same as base config:

```typescript
// testing/setupTests.ts
import '@testing-library/jest-dom';
```

```javascript
// testing/__mocks__/styleMock.js
module.exports = {};

// testing/__mocks__/fileMock.js
module.exports = 'test-file-stub';
```

## Scripts

Add to your library's `package.json`:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

## Testing Library Components

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('renders correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeVisible();
    });
});
```

## License

MIT

