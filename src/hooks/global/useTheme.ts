import { useContext } from 'react';

import themeContext from '@/~global/themeContext';

function useTheme() {
  const context = useContext(themeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default useTheme;
