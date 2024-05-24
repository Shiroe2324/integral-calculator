import React from 'react';
import { Menu } from 'react-daisyui';
import { TbCheck, TbQuestionMark } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import Clock from '@/~global/Clock';
import ThemeButton from '@/~global/ThemeButton';
import { paths } from '@/~routes';

const DrawerSide: React.FC = () => {
  return (
    <Menu className='p-4 w-60 md:w-80 h-full bg-base-200 gap-10'>
      <div>
        <Menu.Item>
          <Link to={paths.definiteIntegrals} className='btn btn-ghost'>
            Integrales Definidas
            <TbCheck />
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={paths.indefiniteIntegrals} className='btn btn-ghost'>
            Integrales Indefinidas
            <TbQuestionMark />
          </Link>
        </Menu.Item>
      </div>
      <div>
        <div className='flex justify-center'>
          <Clock />
        </div>
        <Menu.Item className='flex justify-center'>
          <ThemeButton />
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default DrawerSide;
