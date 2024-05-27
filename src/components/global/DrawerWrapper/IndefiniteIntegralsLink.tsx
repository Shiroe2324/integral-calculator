import React from 'react';
import { TbQuestionMark } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';

import { paths } from '@/~routes';

const IndefiniteIntegralsLink: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => (location.pathname === path ? 'btn-active' : '');

  return (
    <Link to={paths.indefiniteIntegrals} className={`btn btn-ghost ${isActive(paths.indefiniteIntegrals)}`}>
      Integrales Indefinidas
      <TbQuestionMark />
    </Link>
  );
};

export default IndefiniteIntegralsLink;
