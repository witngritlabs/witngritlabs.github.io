import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'witngritlabs.github.io'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   base: './',
})
