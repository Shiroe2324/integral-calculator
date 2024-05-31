import React from 'react';
import { useTranslation } from 'react-i18next';

import ErrorCard from '@/~calc/IndefiniteIntegrals/ErrorCard';
import IntegralForm from '@/~calc/IndefiniteIntegrals/IntegralForm';
import SuccessCard from '@/~calc/IndefiniteIntegrals/SuccessCard';
import IndefiniteIntegralsProvider from '@/~calc/IndefiniteIntegralsProvider';
import useIndefiniteIntegrals from '@/~calc/useIndefiniteIntegrals';

const IndefiniteIntegralsComponent: React.FC = () => {
  const { t } = useTranslation('calc-indefinite-integrals');
  const { result, error } = useIndefiniteIntegrals();

  return (
    <main className='flex flex-grow flex-col items-center justify-center py-5'>
      <h1 className='mb-7 text-center text-5xl font-bold drop-shadow-text'>{t('title')}</h1>
      <div className='flex w-full flex-col items-center justify-evenly gap-5 xl:flex-row'>
        <IntegralForm />

        {result && <SuccessCard />}
        {error && <ErrorCard />}
      </div>
    </main>
  );
};

const IndefiniteIntegrals: React.FC = () => {
  return (
    <IndefiniteIntegralsProvider>
      <IndefiniteIntegralsComponent />
    </IndefiniteIntegralsProvider>
  );
};

export default IndefiniteIntegrals;
