import React from 'react';
import { Button, Card } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { TbCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import definite from '@/~assets/images/definite.jpg';
import { paths } from '@/~routes';

const DefiniteIntegralsCard: React.FC = () => {
  const { t } = useTranslation('home-dashboard');

  return (
    <Card className='w-full border-primary' side='sm'>
      <Card.Image src={definite} alt='Integrales Definidas' />
      <Card.Body>
        <h2 className='flex items-center text-2xl font-semibold'>
          <span>{t('definite-integrals.title')}</span> <TbCheck />
        </h2>

        <p>{t('definite-integrals.info')}</p>
        <Link to={paths.definiteIntegrals}>
          <Button className='w-full' color='primary'>
            {t('definite-integrals.button')}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DefiniteIntegralsCard;
