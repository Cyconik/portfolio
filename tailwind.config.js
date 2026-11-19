/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060D17',
          900: '#0A192F',
          800: '#0F233D',
          700: '#172A45',
          600: '#233A5E',
        },
        slate: {
          850: '#151F30',
        },
        brand: {
          blue: '#2563EB',
          sky: '#0284C7',
          emerald: '#059669',
          indigo: '#4F46E5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        card: '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(15, 23, 42, 0.1), 0 4px 12px -2px rgba(15, 23, 42, 0.06)',
      }
    },
  },
  plugins: [],
}
