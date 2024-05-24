import React from 'react';
import { Navbar as DaisyUINavbar } from 'react-daisyui';

import NavbarCenter from '@/~global/DrawerWrapper/NavbarCenter';
import NavbarLeft from '@/~global/DrawerWrapper/NavbarLeft';
import NavbarRight from '@/~global/DrawerWrapper/NavbarRight';

const Navbar: React.FC = () => {
  return (
    <DaisyUINavbar className='bg-primary text-primary-content'>
      <NavbarLeft />
      <NavbarCenter />
      <NavbarRight />
    </DaisyUINavbar>
  );
};

export default Navbar;
