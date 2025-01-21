import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/browser.ts', 'src/node.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  splitting: false,
})