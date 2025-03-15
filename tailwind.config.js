// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D97706", // Orange
        secondary: "#4A4E69", // Dark Gray
        accent: "#FF5557", // Red
        background: "#F9FAFB", // Light Gray
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Default font
      },
    },
  },
  plugins: [],
};