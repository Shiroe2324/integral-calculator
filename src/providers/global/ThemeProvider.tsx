import React, { useEffect, useState } from 'react';

import themeContext from '@/~global/themeContext';
import type { Theme } from '@/~types/Theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme = (localStorage.getItem('theme') || 'auto') as Theme;
  const [theme, setTheme] = useState<Theme>(storedTheme);

  useEffect(() => {
    if (theme === 'auto') {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      document.documentElement.setAttribute('data-theme', mql.matches ? 'custom-dark' : 'custom-light');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = (selectedTheme: Theme) => {
    localStorage.setItem('theme', selectedTheme);
    setTheme(selectedTheme);
  };

  const isDarkMode = () => {
    if (theme === 'auto') {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      return mql.matches;
    } else {
      return theme === 'custom-dark';
    }
  };

  return <themeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
