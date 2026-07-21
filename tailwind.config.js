/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
        },
        accent: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          cyan: '#06B6D4',
        },
        ink: {
          primary: '#0F172A',
          secondary: '#475569',
          muted: '#64748B',
        },
        line: '#E2E8F0',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px rgba(15, 23, 42, 0.04)',
        cardHover: '0 8px 24px rgba(15, 23, 42, 0.10)',
      },
      borderRadius: {
        card: '16px',
        btn: '11px',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
