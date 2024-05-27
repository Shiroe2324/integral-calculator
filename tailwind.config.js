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
    primary: '#9FE88D',
    secondary: '#FF7D5C',
    accent: '#C792E9',
    neutral: '#1c212b',
    'neutral-content': '#B2CCD6',
    'base-100': '#2A303C',
    'base-200': '#242933',
    'base-300': '#20252E',
    'base-content': '#B2CCD6',
    info: '#28ebff',
    success: '#62efbd',
    warning: '#efd057',
    error: '#ffae9b',
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
