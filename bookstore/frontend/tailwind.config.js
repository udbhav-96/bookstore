/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      maxWidth: {
        'container-lg': '1024px', // Adjust the width as needed for laptops
      },
    },
  },
  plugins: [],
}

