/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          primary: '#E11D48',
          soft: '#FFF0F5',
          deep: '#9F1239',
          glow: '#FF4D8D',
        },
        text: {
          primary: '#0F172A',
          secondary: '#64748B',
        },
        safety: '#3B82F6',
        success: '#10B981',
        purple: {
          soft: '#F5F3FF',
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
        'hero': ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'section': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        prose: '700px',
        content: '1280px',
      },
      boxShadow: {
        card: '0 10px 40px -10px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 20px 40px -10px rgba(225, 29, 72, 0.25)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        glow: '0 0 20px rgba(225, 29, 72, 0.5)',
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(180deg, #FFF0F5 0%, #FFFFFF 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(339,100%,75%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(250,100%,80%,0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(330,100%,85%,0.15) 0px, transparent 50%)',
      },
      animation: {
        'blob': 'blob 10s infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.7', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
