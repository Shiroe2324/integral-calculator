import React from 'react';
import { TbCheck } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

import { paths } from '@/~routes';

const DefiniteIntegralsLink: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => (location.pathname === path ? 'btn-active' : '');

  return (
    <Link to={paths.definiteIntegrals} className={`btn btn-ghost ${isActive(paths.definiteIntegrals)}`}>
      Integrales Definidas
      <TbCheck />
    </Link>
  );
};

export default DefiniteIntegralsLink;
