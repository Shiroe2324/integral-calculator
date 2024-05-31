import React from 'react';

import DefiniteIntegralsCard from '@/~home/Dashboard/DefiniteIntegralsCard';
import IndefiniteIntegralsCard from '@/~home/Dashboard/IndefiniteIntegralsCard';

const Dashboard: React.FC = () => {
  return (
    <main className='container mx-auto my-5 flex flex-grow flex-col items-center justify-center md:my-0'>
      <section className='flex w-full flex-col justify-center gap-5 md:gap-10'>
        <DefiniteIntegralsCard />
        <IndefiniteIntegralsCard />
      </section>
    </main>
  );
};

export default Dashboard;
