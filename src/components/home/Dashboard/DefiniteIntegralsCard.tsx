import React from 'react';
import { Button, Card } from 'react-daisyui';
import { TbCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import definite from '@/~assets/images/definite.jpg';
import { paths } from '@/~routes';

const DefiniteIntegralsCard: React.FC = () => {
  return (
    <Card className=' w-100 border-primary' side='sm'>
      <Card.Image src={definite} alt='Integrales Definidas' />
      <Card.Body>
        <h2 className='text-2xl font-semibold  flex items-center'>
          <span>Integrales Definidas</span> <TbCheck />
        </h2>

        <p>Calcula integrales definidas de forma sencilla.</p>
        <Link to={paths.definiteIntegrals}>
          <Button className='w-full' color='primary'>
            Ir a las integrales definidas
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DefiniteIntegralsCard;
