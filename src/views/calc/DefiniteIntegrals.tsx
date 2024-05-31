import React from 'react';
import { useTranslation } from 'react-i18next';

import ErrorCard from '@/~calc/DefiniteIntegrals/ErrorCard';
import IntegralForm from '@/~calc/DefiniteIntegrals/IntegralForm';
import SuccessCard from '@/~calc/DefiniteIntegrals/SuccessCard';
import DefiniteIntegralsProvider from '@/~calc/DefiniteIntegralsProvider';
import useDefiniteIntegrals from '@/~calc/useDefiniteIntegrals';

const DefiniteIntegralsComponent: React.FC = () => {
  const { t } = useTranslation('calc-definite-integrals');
  const { result, error } = useDefiniteIntegrals();

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

const DefiniteIntegrals: React.FC = () => {
  return (
    <DefiniteIntegralsProvider>
      <DefiniteIntegralsComponent />
    </DefiniteIntegralsProvider>
  );
};

export default DefiniteIntegrals;
