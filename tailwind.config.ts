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
        // --- Sistema visual v2 (rediseño premium) ---
        // 'ink': negro cálido para headlines editoriales — reemplaza el uso
        // de slate-900 puro en textos grandes para dar una sensación más
        // cálida/premium que un negro frío de UI.
        'ink': {
          50: '#f7f5f4',
          100: '#e9e4e1',
          300: '#a89e98',
          500: '#5c534d',
          700: '#2e2724',
          900: '#1c1613',
        },
        // 'paper': blanco cálido para secciones editoriales grandes, en vez
        // de un #ffffff plano en toda la página.
        'paper': {
          DEFAULT: '#fdfaf7',
          50: '#fdfaf7',
          100: '#faf4ee',
        },
      },
      fontFamily: {
        // UI, cuerpo de texto, precios, labels.
        'sans': ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        // Headlines editoriales — la pieza central de la jerarquía tipográfica
        // nueva (hero, títulos de sección, nombres de campaña).
        'serif': ['var(--font-fraunces)', 'Georgia', 'serif'],
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
        // Escala "display" para hero cinematográfico y headlines de campaña.
        '6xl': ['60px', { lineHeight: '60px', letterSpacing: '-0.02em' }],
        '7xl': ['76px', { lineHeight: '76px', letterSpacing: '-0.02em' }],
        '8xl': ['96px', { lineHeight: '92px', letterSpacing: '-0.025em' }],
      },
      spacing: {
        'safe-top': 'max(1rem, env(safe-area-inset-top))',
        'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
        'safe-left': 'max(1rem, env(safe-area-inset-left))',
        'safe-right': 'max(1rem, env(safe-area-inset-right))',
        // Ritmo editorial: separación generosa entre secciones grandes de home.
        'section': '6rem',
        'section-lg': '9rem',
      },
      boxShadow: {
        // Sombras suaves y difusas en vez de los box-shadow "duros" por
        // defecto de Tailwind — se sienten más premium en cards y overlays.
        'soft': '0 2px 8px 0 rgb(28 22 19 / 0.06)',
        'soft-lg': '0 12px 32px -8px rgb(28 22 19 / 0.12)',
        'elevated': '0 24px 64px -12px rgb(28 22 19 / 0.18)',
      },
      transitionTimingFunction: {
        // Curva "expo-out": arranca rápido y frena suave — la sensación de
        // movimiento premium que se usa en scroll-reveal, drawers y modales.
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-fade': 'revealFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'ken-burns': 'kenBurns 12s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        revealFade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
