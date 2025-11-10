import { createStore } from 'jotai';

/**
 * Jotai store instance for direct atom access in tests
 *
 * @example
 * ```typescript
 * import { jotaiStore } from '@yourname/testing-utils';
 * import { myAtom } from '@/atoms/myAtom';
 *
 * // Set atom value in test
 * jotaiStore.set(myAtom, 'test value');
 *
 * // Get atom value in test
 * const value = jotaiStore.get(myAtom);
 * ```
 */
export const jotaiStore = createStore();

