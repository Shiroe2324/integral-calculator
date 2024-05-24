import daisyui from 'daisyui';

const customThemes = {
  'custom-light': {
    'color-scheme': 'light',
    primary: '#d1c1d7',
    secondary: '#f6cbd1',
    accent: '#b4e9d6',
    neutral: '#70acc7',
    'base-100': 'oklch(100% 0 0)',
    'base-200': '#f9fafb',
    'base-300': '#d1d5db',
    '--rounded-btn': '1.9rem',
    '--tab-radius': '0.7rem',
  },

  'custom-dark': {
    'color-scheme': 'dark',
    primary: '#ff79c6',
    secondary: '#bd93f9',
    accent: '#ffb86c',
    neutral: '#414558',
    'base-100': '#282a36',
    'base-content': '#f8f8f2',
    info: '#8be9fd',
    success: '#50fa7b',
    warning: '#f1fa8c',
    error: '#ff5555',
    '--rounded-btn': '1.9rem',
    '--tab-radius': '0.7rem',
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      dropShadow: {
        text: '0 1.2px 1.2px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark', customThemes],
  },
  plugins: [daisyui],
};
