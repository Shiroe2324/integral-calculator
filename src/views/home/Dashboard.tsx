import React from 'react';

import DefiniteIntegralsCard from '@/~home/Dashboard/DefiniteIntegralsCard';
import IndefiniteIntegralsCard from '@/~home/Dashboard/IndefiniteIntegralsCard';

const Dashboard: React.FC = () => {
  return (
    <main className='container mx-auto flex-grow flex flex-col items-center justify-center'>
      <section className='w-full flex flex-col justify-center gap-5 my-5 md:gap-16 md:my-0'>
        <DefiniteIntegralsCard />
        <IndefiniteIntegralsCard />
      </section>
    </main>
  ); 
};

export default Dashboard;
