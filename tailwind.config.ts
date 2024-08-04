import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        olympicHeadlineRegular: [
          "var(--font-olympic-headline-regular)",
          "sans-serif",
        ],
        olympicSans: ["var(--font-olympic-sans)", "sans-serif"],
        paris2024: ["var(--font-paris-2024)", "sans-serif"],
        sourceSansPro: ["var(--font-source-sans-pro)", "sans-serif"],
      },
      backgroundImage: {
        "card-discipline":
          "linear-gradient(90deg, rgb(51, 19, 98) 0%, #7d84c2 100%);",
      },
      height: {
        inherit: "inherit",
      },
      minHeight: {
        inherit: "inherit",
      },
      keyframes: {
        slowPulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.8",
          },
        },
      },
      animation: {
        pulseSlow: "slowPulse 2s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
