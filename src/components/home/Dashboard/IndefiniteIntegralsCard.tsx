import React from 'react';
import { Button, Card } from 'react-daisyui';
import { TbQuestionMark } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import indefinite from '@/~assets/images/indefinite.png';
import { paths } from '@/~routes';

const IndefiniteIntegralsCard: React.FC = () => {
  return (
    <Card className='bg-secondary w-100 border-primary' side='sm'>
      <Card.Image src={indefinite} alt='Integrales Definidas' />
      <Card.Body>
        <h2 className='text-2xl font-semibold text-secondary-content flex items-center'>
          <span>Integrales Indefinidas</span> <TbQuestionMark />
        </h2>

        <p className='text-secondary-content'>Calcula integrales indefinidas de forma sencilla.</p>
        <Link to={paths.indefiniteIntegrals}>
          <Button className='bg-base-300 border-base-100 w-full'>Ir a las integrales indefinidas</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default IndefiniteIntegralsCard;
