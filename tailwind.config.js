/** @type {import('tailwindcss').Config} */

/*eslint-env node*/
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
          recoleta: ['Recoleta', 'sans-serif'],
          gordita: ['Gordita', 'sans-serif']
      },
      colors: {
        black: "hsl(0, 0%, 0%)",
        smokeyBlack: "hsl(0, 0%, 7%)",
        eerieBlack: "hsl(0, 0%, 9%)",
        radicalRed: "hsl(346, 100%, 58%)",
        white: "hsl(0, 0%, 100%)",
        whiteA9: "hsla(0, 0%, 100%, 0.09)",
        whiteA15: "hsla(0, 0%, 100%, 0.15)",
        whiteA25: "hsla(0, 0%, 100%, 0.25)",
        whiteA50: "hsla(0, 0%, 100%, 0.5)",
        whiteA70: "hsla(0, 0%, 100%, 0.7)",
        whiteA75: "hsla(0, 0%, 100%, 0.75)",
        whiteA80: "hsla(0, 0%, 100%, 0.8)",
        jet1: "hsl(0, 0%, 20%)",
        jet2: "hsl(0, 0%, 16%)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        gradient1: "linear-gradient(180deg, transparent, hsl(0, 0%, 7%))",
        gradient2: "linear-gradient(180deg, hsl(0, 0%, 7%) 25%, hsla(0, 0%, 0%, 0.6) 80%)",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}