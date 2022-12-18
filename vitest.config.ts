import { configDefaults, defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@test': path.resolve(__dirname, './test'),
    },
  },
  test: {
    exclude: [...configDefaults.exclude, '**/test/**'],
    coverage: {
      exclude: [...configDefaults.exclude, '**/main/**', '**/test/**', '**/domain/**', '**/infra/web-server/**'],
      all: true,
      lines: 0,
      branches: 0,
      statements: 0,
      functions: 0
    }
  }
})
