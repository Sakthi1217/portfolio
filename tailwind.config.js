/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#05081A",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
          400: "#94A3B8",
          300: "#CBD5E1",
          200: "#E2E8F0",
        },
        cyan: {
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
        },
        emerald: {
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        blue: {
          400: "#60A5FA",
          500: "#3B82F6",
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in",
        slideInUp: "slideInUp 0.6s ease-out",
        slideInLeft: "slideInLeft 0.6s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(34, 211, 238, 0.5)" },
        },
      },
    },
  },
  plugins: [],
}
