import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbMathIntegralX } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import { paths } from '@/~routes';

const NavbarCenter: React.FC = () => {
  const { t } = useTranslation('global-drawer-wrapper');
  return (
    <nav className='flex-1'>
      <Link to={paths.dashboard} className='btn btn-ghost text-xl'>
        {t('title')}
        <TbMathIntegralX />
      </Link>
    </nav>
  );
};

export default NavbarCenter;
