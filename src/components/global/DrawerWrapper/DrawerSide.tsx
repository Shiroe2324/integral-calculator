import React from 'react';
import { Menu } from 'react-daisyui';

import Clock from '@/~global/Clock';
import DefiniteIntegralsLink from '@/~global/DrawerWrapper/DefiniteIntegralsLink';
import IndefiniteIntegralsLink from '@/~global/DrawerWrapper/IndefiniteIntegralsLink';
import ThemeButton from '@/~global/ThemeButton';

const DrawerSide: React.FC = () => {
  return (
    <Menu className='p-4 w-60 md:w-80 h-full bg-base-200 justify-between'>
      <nav className='flex flex-col gap-2'>
        <Menu.Item>
          <DefiniteIntegralsLink />
        </Menu.Item>
        <Menu.Item>
          <IndefiniteIntegralsLink />
        </Menu.Item>
      </nav>
      <footer className='flex flex-col items-center gap-2'>
        <Clock />
        <Menu.Item className='flex items-center w-full'>
          <ThemeButton className='w-full' />
        </Menu.Item>
      </footer>
    </Menu>
  );
};

export default DrawerSide;
