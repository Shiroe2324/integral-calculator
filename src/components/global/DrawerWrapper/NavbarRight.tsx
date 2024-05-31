import React from 'react';

import ChangeLanguageMenu from '@/~global/ChangeLanguageMenu';
import Clock from '@/~global/Clock';
import DefiniteIntegralsLink from '@/~global/DrawerWrapper/DefiniteIntegralsLink';
import IndefiniteIntegralsLink from '@/~global/DrawerWrapper/IndefiniteIntegralsLink';
import ThemeButton from '@/~global/ThemeButton';

const NavbarRight: React.FC = () => {
  return (
    <nav className='hidden flex-none gap-4 xl:flex'>
      <DefiniteIntegralsLink />
      <IndefiniteIntegralsLink />
      <ChangeLanguageMenu />
      <Clock />
      <ThemeButton />
    </nav>
  );
};

export default NavbarRight;
