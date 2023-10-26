import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{tsx,mdx}"],
  theme: {
    fontFamily: {
      primary: ["Inter", "sans-serif"],
    },
    fontSize: {
      xs: "clamp(0.6rem, 0.4571rem + 0.7143vw, 0.8rem);",
      sm: "1rem",
      lg: "2rem",
    },
    spacing: {
      xs: "clamp(0.25rem, 0.1364rem + 0.5682vw, 0.5rem)", //320-1024px
      sm: "clamp(0.5rem, 0.3864rem + 0.5682vw, 0.75rem)", //320-1024px
      md: "1rem",
      lg: "3rem;",
      xl: "4rem",
    },
    borderRadius: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
    },
    screens: {
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }
      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: "hsl(var(--primary) / 1)",
        "primary-foreground": "hsl(var(--primary-foreground) / 1)",
        secondary: "hsl(var(--secondary) / 1)",
        "secondary-foreground": "hsl(var(--secondary-foreground) / 1)",
        cta: "hsl(var(--cta) / 1)",
        "cta-tooltip": "hsl(var(--cta-tooltip) / 0.2)",

        info: "hsl(var(--info) / 1)",
        danger: "hsl(var(--danger) / 1)",
        success: "hsl(var(--success) / 1)",
      },
    },
  },
  plugins: [],
}
export default config
