/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F2F1ED',
        charcoal: '#111111',
        mutedGray: '#6B7280',
        sageGreen: '#8DA399',
        borderGray: '#E5E7EB',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
