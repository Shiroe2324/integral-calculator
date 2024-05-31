import React from 'react';
import { Button } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { FaTriangleExclamation } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  const { t } = useTranslation('others-page-not-found');
  const navigate = useNavigate();
  const isFirstPage = () => window.history.length <= 1;

  const handleClick = () => {
    if (isFirstPage()) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  return (
    <main className='flex flex-grow flex-col items-center justify-center'>
      <FaTriangleExclamation size={100} className='mb-4 text-warning' />
      <h1 className='mb-4 text-4xl font-bold text-base-content'>{t('title')}</h1>
      <p className='text-lg text-base-content'>{t('description')}</p>
      <Button onClick={handleClick} color='primary' className='mt-4'>
        {isFirstPage() ? t('return-button.home') : t('return-button.previous')}
      </Button>
    </main>
  );
};

export default PageNotFound;
