import 'nerdamer/all';
import React from 'react';

import ErrorCard from '@/~calc/IndefiniteIntegrals/ErrorCard';
import IntegralForm from '@/~calc/IndefiniteIntegrals/IntegralForm';
import SuccessCard from '@/~calc/IndefiniteIntegrals/SuccessCard';
import IndefiniteIntegralsProvider from '@/~calc/IndefiniteIntegralsProvider';
import useIndefiniteIntegrals from '@/~calc/useIndefiniteIntegrals';

const IndefiniteIntegralsComponent: React.FC = () => {
  const { result, error } = useIndefiniteIntegrals();

  return (
    <main className='flex-grow flex flex-col justify-center items-center py-5'>
      <h1 className='mb-7 text-center text-5xl font-bold drop-shadow-text'>Integrales Indefinidas</h1>
      <div className='flex flex-col xl:flex-row justify-evenly items-center w-full'>
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
