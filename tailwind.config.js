/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        grey: 'hsl(0, 0%, 20%)', 
        darkGrey: 'hsl(0, 0%, 12%)', 
        offBlack: 'hsl(0, 0%, 8%)', 
        green: 'hsl(75, 94%, 57%)',
      },
    },
  },
  plugins: [],
};
