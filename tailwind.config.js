/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
          subtle: 'var(--card-subtle)',
        },
        
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)',
        },
        
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
          cyan: 'var(--accent-cyan)',
          amber: 'var(--accent-amber)',
          emerald: 'var(--accent-emerald)',
          rose: 'var(--accent-rose)',
        },
        
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'subtle': 'var(--shadow-subtle)',
        'card': 'var(--shadow-card)',
        'lift': 'var(--shadow-lift)',
        'tactile': 'var(--shadow-tactile)',
      },
      borderRadius: {
        'organic': '24px 8px 24px 8px',
        'stamp': '12px 24px 12px 24px',
      }
    },
  },
  plugins: [],
}
