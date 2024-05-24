import React from 'react';
import { Hero } from 'react-daisyui';

import Content from '@/~home/index/Content';

const Home: React.FC = () => {
  return (
    <Hero className='flex-grow'>
      <Hero.Content className='text-center text-neutral-content'>
        <Content />
      </Hero.Content>
    </Hero>
  );
};

export default Home;
