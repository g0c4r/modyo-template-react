import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: 'tw-',
  theme: {
    extend: {
    },
  },
  plugins: [],
}
export default config
