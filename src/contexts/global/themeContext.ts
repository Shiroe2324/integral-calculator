import { createContext } from 'react';

import type { Theme } from '@/~types/Theme';

interface ThemeContextType {
  theme: Theme;
  isDarkMode: () => boolean;
  toggleTheme: (theme: Theme) => void;
}

const themeContext = createContext<ThemeContextType>({
  theme: 'auto',
  isDarkMode: () => false,
  toggleTheme: () => {},
});

export default themeContext;
