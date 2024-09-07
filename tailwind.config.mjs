/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        basewhite: "var(--basewhite)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-50": "var(--gray-50)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "primary-50": "var(--primary-50)",
        "primary-700": "var(--primary-700)",
      },
      fontFamily: {
        "display-sm-semibold": "var(--display-sm-semibold-font-family)",
        "text-md-regular": "var(--text-md-regular-font-family)",
        "text-sm-medium": "var(--text-sm-medium-font-family)",
        "text-sm-regular": "var(--text-sm-regular-font-family)",
        "text-sm-semibold": "var(--text-sm-semibold-font-family)",
      },
      boxShadow: {
        "shadow-sm": "var(--shadow-sm)",
        "shadow-xs": "var(--shadow-xs)",
      },
    },
  },
  plugins: [],
};