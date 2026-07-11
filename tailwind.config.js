/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#10141C',
        surface: '#161B22',
        surface2: '#1C2330',
        border: '#26304050',
        text: '#E6EDF3',
        muted: '#7D8590',
        accent: {
          DEFAULT: '#F2A93B',
          dim: '#8A6421',
        },
        cyan: {
          DEFAULT: '#58A6FF',
        },
        diffAdd: '#3FB950',
        diffRemove: '#F85149',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
