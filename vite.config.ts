import { defineConfig } from "vite";
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    plugins: [tsConfigPaths()],
    test: {
        globals: true, // enable global imports (dont need to import nothing in .spec.ts)
    }
})