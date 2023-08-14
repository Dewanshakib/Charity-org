

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",

];
export const theme = {
  extend: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "980px",
      xl: "1240px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
  },
};
export const plugins = [];
