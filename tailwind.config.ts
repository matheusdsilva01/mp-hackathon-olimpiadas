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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        inherit: "inherit",
      },
      minHeight: {
        inherit: "inherit",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
