import React, { useState } from 'react';

import drawerContext from '@/~global/drawerContext';

interface DrawerProviderProps {
  children: React.ReactNode;
}

const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [visible, setDrawerVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    setDrawerVisible(!visible);
  };

  return <drawerContext.Provider value={{ visible, toggleVisible }}>{children}</drawerContext.Provider>;
};

export default DrawerProvider;
