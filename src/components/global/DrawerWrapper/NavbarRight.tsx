import React from 'react';
import { TbCheck, TbQuestionMark } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import Clock from '@/~global/Clock';
import ThemeButton from '@/~global/ThemeButton';
import { paths } from '@/~routes';

const NavbarRight: React.FC = () => {
  return (
    <nav className='flex-none hidden gap-8 lg:flex'>
      <div className='flex'>
        <Link to={paths.definiteIntegrals} className='btn btn-ghost'>
          Integrales Definidas
          <TbCheck />
        </Link>
        <Link to={paths.indefiniteIntegrals} className='btn btn-ghost'>
          Integrales Indefinidas
          <TbQuestionMark />
        </Link>
      </div>
      <div className='flex gap-8'>
        <Clock />
        <ThemeButton />
      </div>
    </nav>
  );
};

export default NavbarRight;
