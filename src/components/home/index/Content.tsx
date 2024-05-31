import React from 'react';
import { Button } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { paths } from '@/~routes';

const Content: React.FC = () => {
  const { t } = useTranslation('home-index');

  return (
    <article className='max-w-md'>
      <h1 className='mb-6 text-6xl font-bold drop-shadow-text'>{t('title')}</h1>
      <Link to={paths.dashboard}>
        <Button color='secondary'>
          <FaAngleRight />
          {t('button')}
          <FaAngleLeft />
        </Button>
      </Link>
    </article>
  );
};

export default Content;
