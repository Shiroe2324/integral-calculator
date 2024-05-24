import React from 'react';
import { Card } from 'react-daisyui';

import SuccessCardHeader from '@/~calc/CardHeader';
import useDefiniteIntegrals from '@/~calc/useDefiniteIntegrals';
import useToastAlert from '@/~global/useToastAlert';

const ErrorCard: React.FC = () => {
  const { error } = useDefiniteIntegrals();
  const { addToastAlert } = useToastAlert();

  const copyError = () => {
    navigator.clipboard.writeText(error);
    addToastAlert('Error copiado al portapapeles', 'success');
  };

  return (
    <Card className='w-full max-w-xl mt-6 bg-error'>
      <Card.Body>
        <SuccessCardHeader title='Error' ButtonOnClick={copyError} buttonText='Copiar' type='error' />
        <p className='text-error-content'>Ha ocurrido un error al calcular la integral</p>
        <p className='text-error-content'>{error}</p>
      </Card.Body>
    </Card>
  );
};

export default ErrorCard;
