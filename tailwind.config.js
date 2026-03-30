const withAlpha = (variable) => `hsl(var(${variable}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: withAlpha('--color-primary-50'),
          100: withAlpha('--color-primary-100'),
          200: withAlpha('--color-primary-200'),
          300: withAlpha('--color-primary-300'),
          400: withAlpha('--color-primary-400'),
          500: withAlpha('--color-primary-500'),
          600: withAlpha('--color-primary-600'),
          700: withAlpha('--color-primary-700'),
          800: withAlpha('--color-primary-800'),
          900: withAlpha('--color-primary-900'),
          DEFAULT: withAlpha('--color-primary-500'),
          foreground: withAlpha('--color-primary-foreground'),
        },
        secondary: {
          50: withAlpha('--color-secondary-50'),
          100: withAlpha('--color-secondary-100'),
          200: withAlpha('--color-secondary-200'),
          300: withAlpha('--color-secondary-300'),
          400: withAlpha('--color-secondary-400'),
          500: withAlpha('--color-secondary-500'),
          600: withAlpha('--color-secondary-600'),
          700: withAlpha('--color-secondary-700'),
          800: withAlpha('--color-secondary-800'),
          900: withAlpha('--color-secondary-900'),
          DEFAULT: withAlpha('--color-secondary-500'),
          foreground: withAlpha('--color-secondary-foreground'),
        },
        neutral: {
          50: withAlpha('--color-neutral-50'),
          100: withAlpha('--color-neutral-100'),
          200: withAlpha('--color-neutral-200'),
          300: withAlpha('--color-neutral-300'),
          400: withAlpha('--color-neutral-400'),
          500: withAlpha('--color-neutral-500'),
          600: withAlpha('--color-neutral-600'),
          700: withAlpha('--color-neutral-700'),
          800: withAlpha('--color-neutral-800'),
          900: withAlpha('--color-neutral-900'),
          DEFAULT: withAlpha('--color-neutral-500'),
          foreground: withAlpha('--color-neutral-foreground'),
        },
        success: {
          DEFAULT: withAlpha('--color-success-500'),
          foreground: withAlpha('--color-success-foreground'),
        },
        warning: {
          DEFAULT: withAlpha('--color-warning-500'),
          foreground: withAlpha('--color-warning-foreground'),
        },
        danger: {
          DEFAULT: withAlpha('--color-danger-500'),
          foreground: withAlpha('--color-danger-foreground'),
        },
      },
      borderRadius: {
        DEFAULT: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
    },
  },
  plugins: [],
}

