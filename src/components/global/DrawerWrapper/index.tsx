import React from 'react';
import { Drawer } from 'react-daisyui';

import DrawerProvider from '@/~global/DrawerProvider';
import DrawerSide from '@/~global/DrawerWrapper/DrawerSide';
import Navbar from '@/~global/DrawerWrapper/Navbar';
import useDrawer from '@/~global/useDrawer';

interface NavbarWrapperProps {
  children: React.ReactNode;
}

const DrawerWrapperComponent: React.FC<NavbarWrapperProps> = ({ children }) => {
  const { visible, toggleVisible } = useDrawer();

  return (
    <Drawer open={visible} onClickOverlay={toggleVisible} side={<DrawerSide />}>
      <div className='flex flex-col h-screen'>
        <Navbar />
        {children}
      </div>
    </Drawer>
  );
};

const DrawerWrapper: React.FC<NavbarWrapperProps> = ({ children }) => {
  return (
    <DrawerProvider>
      <DrawerWrapperComponent>{children}</DrawerWrapperComponent>
    </DrawerProvider>
  );
};

export default DrawerWrapper;
