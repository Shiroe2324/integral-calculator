import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbQuestionMark } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

import { paths } from '@/~routes';

const IndefiniteIntegralsLink: React.FC = () => {
  const { t } = useTranslation('global-drawer-wrapper');
  const location = useLocation();

  const isActive = (path: string) => (location.pathname === path ? 'btn-active' : '');

  return (
    <Link to={paths.indefiniteIntegrals} className={`btn btn-ghost ${isActive(paths.indefiniteIntegrals)}`}>
      {t('indefinite-integrals-link')}
      <TbQuestionMark />
    </Link>
  );
};

export default IndefiniteIntegralsLink;
