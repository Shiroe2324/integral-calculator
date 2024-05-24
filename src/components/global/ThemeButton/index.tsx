import React, { useEffect, useState } from 'react';
import { Toggle } from 'react-daisyui';
import { HiMoon, HiSun } from 'react-icons/hi';

import useTheme from '@/~global/useTheme';

const ThemeButton: React.FC = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const [isThemeDark, setIsThemeDark] = useState<boolean>(isDarkMode());

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e.target.checked ? 'custom-dark' : 'custom-light';
    toggleTheme(selectedTheme);
  };

  useEffect(() => {
    setIsThemeDark(isDarkMode());
  }, [isDarkMode, theme]);

  return (
    <label className='flex w-min justify-center items-center cursor-pointer gap-2'>
      <HiSun size={25} />
      <Toggle checked={isThemeDark} onChange={handleThemeChange} />
      <HiMoon size={25} />
    </label>
  );
};

export default ThemeButton;
