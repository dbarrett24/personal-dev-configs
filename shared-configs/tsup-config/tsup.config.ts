import { defineConfig } from 'tsup';

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['src/index.ts'],
    dts: true,
    clean: true,
    sourcemap: true,
    external: ['fs', 'path', 'prettier', '@pnpm/lockfile-file', 'es-toolkit', '@yourname/prettier-config'],
    skipNodeModulesBundle: true,
});

