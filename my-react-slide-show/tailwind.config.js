/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        "3/5": "60%",
      },
      inset: {
        "3/5": "60%", // 60% de la hauteur du conteneur parent
      },
    },
  },
  plugins: [],
};
