import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbCheck } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

import { paths } from '@/~routes';

const DefiniteIntegralsLink: React.FC = () => {
  const { t } = useTranslation('global-drawer-wrapper');
  const location = useLocation();

  const isActive = (path: string) => (location.pathname === path ? 'btn-active' : '');

  return (
    <Link to={paths.definiteIntegrals} className={`btn btn-ghost ${isActive(paths.definiteIntegrals)}`}>
      {t('definite-integrals-link')}
      <TbCheck />
    </Link>
  );
};

export default DefiniteIntegralsLink;
