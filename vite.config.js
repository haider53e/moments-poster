import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import makeString from "./src/server/utils/makeString"

const base = ["/", "/moments_poster/"][0]

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
  build: { target: "es6" },
  define: { BASE: makeString(base) }
})
