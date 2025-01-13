import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    external: ['react', '@spotify-social/styles', '@radix-ui/*'],
    sourcemap: true,
    clean: true,
    esbuildOptions(options) {
        options.alias = {
            '@': './src',
            '@/components': './src/ui'
        }
    },
    treeshake: true,
    minify: true,
    splitting: false,
    outDir: 'dist',
    bundle: true,
})