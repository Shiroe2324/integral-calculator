import React from 'react';

import Clock from '@/~global/Clock';
import DefiniteIntegralsLink from '@/~global/DrawerWrapper/DefiniteIntegralsLink';
import IndefiniteIntegralsLink from '@/~global/DrawerWrapper/IndefiniteIntegralsLink';
import ThemeButton from '@/~global/ThemeButton';

const NavbarRight: React.FC = () => {
  return (
    <nav className='flex-none hidden gap-7 lg:flex'>
      <DefiniteIntegralsLink />
      <IndefiniteIntegralsLink />
      <Clock />
      <ThemeButton />
    </nav>
  );
};

export default NavbarRight;
