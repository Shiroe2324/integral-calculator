import React from 'react';
import { Button, Card } from 'react-daisyui';
import { TbCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import definite from '@/~assets/images/definite.jpg';
import { paths } from '@/~routes';

const DefiniteIntegralsCard: React.FC = () => {
  return (
    <Card className='bg-secondary w-100 border-primary' side='sm'>
      <Card.Image src={definite} alt='Integrales Definidas' />
      <Card.Body>
        <h2 className='text-2xl font-semibold text-secondary-content flex items-center'>
          <span>Integrales Definidas</span> <TbCheck />
        </h2>

        <p className='text-secondary-content'>Calcula integrales definidas de forma sencilla.</p>
        <Link to={paths.definiteIntegrals}>
          <Button className='bg-base-300 border-base-100 w-full'>Ir a las integrales definidas</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DefiniteIntegralsCard;
