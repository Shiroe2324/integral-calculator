import React from 'react';
import { TbMathIntegralX } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { paths } from '@/~routes';

const NavbarCenter: React.FC = () => {
  return (
    <nav className='flex-1'>
      <Link to={paths.dashboard} className='btn btn-ghost text-xl'>
        Calculadora de Integrales
        <TbMathIntegralX />
      </Link>
    </nav>
  );
};

export default NavbarCenter;
