import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = '/portfolio/';
export default defineConfig({
  plugins: [react()],
  base: repoName, 
});