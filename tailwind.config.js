/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'spicy-orange': '#ff6b35',
        'spicy-red': '#dc2626',
        'spicy-yellow': '#f59e0b',
      },
      animation: {
        'spicy-glow': 'spicy-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'spicy-glow': {
          '0%, 100%': { 
            textShadow: '0 0 5px rgba(255, 107, 53, 0.5)',
          },
          '50%': { 
            textShadow: '0 0 20px rgba(255, 107, 53, 0.8), 0 0 30px rgba(255, 107, 53, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
} 