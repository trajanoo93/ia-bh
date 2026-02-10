/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          cyber: {
            500: '#00f0ff', // Ciano neon
            600: '#00a3cc',
          },
          void: {
            900: '#050510', // Fundo quase preto
            800: '#0f1123',
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Certifique-se de importar a fonte Inter ou use a padrão
        },
        animation: {
          'blob': 'blob 7s infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          blob: {
            '0%': { transform: 'translate(0px, 0px) scale(1)' },
            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
            '100%': { transform: 'translate(0px, 0px) scale(1)' },
          },
        },
      },
    },
    plugins: [],
  }