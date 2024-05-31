import React from 'react';
import { Button } from 'react-daisyui';
import { HiMenuAlt2 } from 'react-icons/hi';

import useDrawer from '@/~global/useDrawer';

const NavbarCenter: React.FC = () => {
  const { toggleVisible } = useDrawer();

  return (
    <nav className='flex-none xl:hidden'>
      <Button aria-label='open sidebar' shape='square' color='ghost' onClick={toggleVisible}>
        <HiMenuAlt2 className='inline-block h-6 w-6 stroke-current' />
      </Button>
    </nav>
  );
};

export default NavbarCenter;
