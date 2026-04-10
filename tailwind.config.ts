import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7A00',
        accent: '#FFA726',
        darkBg: '#0B0F1A',
        brand: {
          orange: '#ff6b35',
          'orange-hover': '#ff8555',
          'orange-glow': 'rgba(255, 107, 53, 0.5)',
          blue: '#0f172a',
          'blue-light': '#1e293b',
          'blue-gradient': '#0c1222',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, #0c1222 0%, #0f172a 50%, #1e293b 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 107, 53, 0.3)',
        'glow-lg': '0 0 60px rgba(255, 107, 53, 0.4)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.2)',
        'glass-card': '0 8px 32px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
