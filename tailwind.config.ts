import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {
    },
  },
  plugins: [],
}
export default config
