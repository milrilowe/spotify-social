import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    external: ['react', 'lucide-react'],
    sourcemap: true,
    clean: true,
    treeshake: true,
    minify: true,
    splitting: false,
    outDir: 'dist',
    bundle: true,
})