import React from 'react';
import { Menu } from 'react-daisyui';

import ChangeLanguageMenu from '@/~global/ChangeLanguageMenu';
import Clock from '@/~global/Clock';
import DefiniteIntegralsLink from '@/~global/DrawerWrapper/DefiniteIntegralsLink';
import IndefiniteIntegralsLink from '@/~global/DrawerWrapper/IndefiniteIntegralsLink';
import ThemeButton from '@/~global/ThemeButton';

const DrawerSide: React.FC = () => {
  return (
    <Menu className='h-full w-60 justify-between bg-base-200 p-4 md:w-80'>
      <nav className='flex flex-col gap-2'>
        <Menu.Item>
          <DefiniteIntegralsLink />
        </Menu.Item>
        <Menu.Item>
          <IndefiniteIntegralsLink />
        </Menu.Item>
      </nav>
      <nav className='flex flex-col items-center gap-2'>
        <ChangeLanguageMenu vertical='top' />
        <Clock />
        <Menu.Item className='flex w-full items-center'>
          <ThemeButton className='w-full' />
        </Menu.Item>
      </nav>
    </Menu>
  );
};

export default DrawerSide;
