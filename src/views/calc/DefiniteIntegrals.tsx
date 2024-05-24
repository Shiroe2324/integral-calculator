import React from 'react';

import ErrorCard from '@/~calc/DefiniteIntegrals/ErrorCard';
import IntegralForm from '@/~calc/DefiniteIntegrals/IntegralForm';
import SuccessCard from '@/~calc/DefiniteIntegrals/SuccessCard';
import DefiniteIntegralsProvider from '@/~calc/DefiniteIntegralsProvider';
import useDefiniteIntegrals from '@/~calc/useDefiniteIntegrals';

const DefiniteIntegralsComponent: React.FC = () => {
  const { result, error } = useDefiniteIntegrals();

  return (
    <main className='flex-grow flex flex-col justify-center items-center py-5'>
      <h1 className='mb-7 text-center text-5xl font-bold drop-shadow-text'>Integrales Definidas</h1>
      <div className='flex flex-col xl:flex-row justify-evenly items-center w-full'>
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
