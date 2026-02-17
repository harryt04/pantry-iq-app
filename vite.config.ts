import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'

export default defineConfig(({ mode }) => ({
  plugins: [
    devtools(),
    tailwindcss(),
    tsConfigPaths({ projects: ['./tsconfig.json'] }),
    tanstackStart({ srcDirectory: 'src' }),
    mode === 'production' ? nitro() : null, // Using the nitro plugin breaks vitest, so only enable it in production
    viteReact(),
  ],
}))
