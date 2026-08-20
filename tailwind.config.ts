import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#FFB400",
          header: "#111111",
          footer: "#111111",
          white: "#FFFFFF",
          alternate: "#FFB400",
          text: "#111827",
          textOnYellow: "#111111",
          textOnBlack: "#FFFFFF",
        },
      },
      borderRadius: {
        '24': '24px',
        'card': '24px',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.08)',
        'soft-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        sans: ['Sora', 'Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
