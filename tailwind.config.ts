import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Rosa Skin World Original
        'primary': {
          50: '#fdf8f9',
          100: '#faf1f3',
          200: '#f5dfe8',
          300: '#e8c4cc',
          400: '#e0adb8',
          500: '#d4a5af',  // Color primario - Rosa Skin World
          600: '#c8929f',
          700: '#bc7f8f',
          800: '#a86a7a',
          900: '#945562',
        },
        'accent': {
          50: '#fffbfc',
          100: '#fff5f8',
          200: '#ffe8f0',
          300: '#ffd4e5',
          400: '#ffc0d9',
          500: '#E89BA9',  // Accent rosa más fuerte
          600: '#dc87a0',
          700: '#d07397',
          800: '#c4598e',
          900: '#b84585',
        },
        'slate': {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      fontFamily: {
        'sans': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
        '5xl': ['48px', { lineHeight: '52px' }],
      },
      spacing: {
        'safe-top': 'max(1rem, env(safe-area-inset-top))',
        'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
        'safe-left': 'max(1rem, env(safe-area-inset-left))',
        'safe-right': 'max(1rem, env(safe-area-inset-right))',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
