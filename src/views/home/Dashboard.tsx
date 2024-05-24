import React from 'react';

import DefiniteIntegralsCard from '@/~home/Dashboard/DefiniteIntegralsCard';
import IndefiniteIntegralsCard from '@/~home/Dashboard/IndefiniteIntegralsCard';

const Dashboard: React.FC = () => {
  return (
    <main className='container mx-auto my-10 h-full'>
      <section className='w-full grid grid-cols-1 gap-10 h-full'>
        <DefiniteIntegralsCard />
        <IndefiniteIntegralsCard />
      </section>
    </main>
  );
};

export default Dashboard;
