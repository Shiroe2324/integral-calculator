import React from 'react';
import { Button, Card } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { TbQuestionMark } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import indefinite from '@/~assets/images/indefinite.png';
import { paths } from '@/~routes';

const IndefiniteIntegralsCard: React.FC = () => {
  const { t } = useTranslation('home-dashboard');

  return (
    <Card className='w-full border-primary' side='sm'>
      <Card.Image src={indefinite} alt='Integrales Definidas' />
      <Card.Body>
        <h2 className='flex items-center text-2xl font-semibold'>
          <span>{t('indefinite-integrals.title')}</span> <TbQuestionMark />
        </h2>

        <p>{t('indefinite-integrals.info')}</p>
        <Link to={paths.indefiniteIntegrals}>
          <Button className='w-full' color='primary'>
            {t('indefinite-integrals.button')}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default IndefiniteIntegralsCard;
