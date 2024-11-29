import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom Colors
        primary: '#ecb204', // Gold
        secondary: '#f08991', // White
        background: '#fcfcfd', // Black
        accent: '#e99a58', // Light Gray for background sections
        textPrimary: '#040316', // Gold for text
        textSecondary: '#040316', // White for text
        textMuted: '#040316', // Muted text
        overlay: 'rgba(0, 0, 0, 0.5)', // Overlay color
      },
    },
    fontFamily: {
      Inter: ["Inter"],
      Bell: ["Bell"],
      Parkinsans: ["Parkinsans"],
      Shubbak: ["Shubbak"],
    },
    backgroundImage: {
      'hero1': "url('/images/img2.jpg')",
      'hero2': "url('/images/wideimg.webp')",
    }
  },
  plugins: [],
} satisfies Config;
