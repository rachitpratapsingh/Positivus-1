/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          accent: "#B9FF66",
        },
        dark: {
          base: "#191919",
          card: "#292929",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "4px 4px 0 #191919",
      },
    },
  },
  plugins: [],
};
