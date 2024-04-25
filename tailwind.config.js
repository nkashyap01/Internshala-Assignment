/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { min: "0px", max: "640px" },
        md: { min: "641px", max: "768px" },
        lg: { min: "769px", max: "1023px" },
      },
    },
  },
  plugins: [],
};
