/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Nepal Flag Inspired Colors
        'crimson': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#DC143C', // Primary Crimson
          600: '#B01030', // Darker Crimson for hover
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#450A0A',
        },
        'navy': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#003893', // Primary Navy Blue
          950: '#030712',
        },
        // Light Theme Colors
        'light': {
          'bg-primary': '#FFFFFF',
          'bg-secondary': '#F8F9FB',
          'bg-card': '#FFFFFF',
          'bg-nav': '#FFFFFF',
          'text-primary': '#0F172A',
          'text-secondary': '#475569',
          'text-muted': '#64748B',
          'text-heading': '#003893',
          'border': '#E2E8F0',
        },
        // Dark Theme Colors
        'dark': {
          'bg-primary': '#0B1120',
          'bg-secondary': '#0F172A',
          'bg-card': '#111827',
          'bg-nav': '#0F172A',
          'text-primary': '#F1F5F9',
          'text-secondary': '#CBD5E1',
          'text-muted': '#94A3B8',
          'text-heading': '#FFFFFF',
          'border': '#1E293B',
        }
      },
      boxShadow: {
        'crimson': '0 0 20px rgba(220, 20, 60, 0.3)',
        'navy': '0 0 20px rgba(0, 56, 147, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'glow-crimson': 'glowCrimson 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        glowCrimson: {
          '0%': { boxShadow: '0 0 5px rgba(220, 20, 60, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(220, 20, 60, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
