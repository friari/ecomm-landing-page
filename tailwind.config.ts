import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1400px",
      },
      fontFamily: {
        poppins: ["var(--poppins)", "sans-serif"],
        "roboto-slab": ["var(--roboto-slab)", "serif"],
        rufina: ["var(--rufina)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        everglade: "#224F34",
        eucalyptus: "#267D49",
        cruise: "#C2EFD4",
        "mine-shaft": "#373737",
      },
    },
  },
  plugins: [],
};
export default config;
