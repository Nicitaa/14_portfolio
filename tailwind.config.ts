import { type Config } from "tailwindcss"
const plugin = require("tailwindcss/plugin")
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Inter", "sans-serif"]
    },
    fontSize: {
      xs: "clamp(0.6rem, 0.4571rem + 0.7143vw, 0.8rem);",
      sm: "1rem",
      lg: "2rem"
    },
    spacing: {
      xs: "clamp(0.25rem, 0.1364rem + 0.5682vw, 0.5rem)", //320-1024px
      sm: "clamp(0.5rem, 0.3864rem + 0.5682vw, 0.75rem)", //320-1024px
      md: "1rem",
      lg: "3rem;",
      xl: "4rem"
    },
    borderRadius: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem"
    },
    screens: {
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      laptop:"1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1440px"
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: "#202020",
        "primary-dark": "rgba(22,21,22,0.95)",
        secondary: "#DDDDDD",
        "secondary-dark": "#C5C5C5",
        cta: "#C15DFF",
        "cta-tooltip": "rgba(193,93,255,0.2)"
      }
    }
  },
  plugins: []
} satisfies Config
