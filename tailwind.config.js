/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          primary: '#F5468D',
          soft: '#FFF3F8',
        },
        text: {
          primary: '#161616',
          secondary: '#6E6E73',
        },
        safety: '#2563EB',
        success: '#22C55E',
        purple: {
          soft: '#F5F0FF',
          DEFAULT: '#8B5CF6',
          100: '#EDE9FE',
          600: '#7C3AED',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'Segoe UI',
          'sans-serif',
        ],
      },
      fontSize: {
        'hero': ['clamp(2.75rem,5vw,5rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        'section': ['clamp(2rem,4vw,3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        prose: '700px',
        content: '1200px',
      },
      boxShadow: {
        card: '0 4px 24px rgba(22, 22, 22, 0.06)',
        'card-hover': '0 12px 40px rgba(245, 70, 141, 0.12)',
        glass: '0 8px 32px rgba(22, 22, 22, 0.08)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(180deg, #FFF3F8 0%, #FFFFFF 50%)',
      },
    },
  },
  plugins: [],
}
