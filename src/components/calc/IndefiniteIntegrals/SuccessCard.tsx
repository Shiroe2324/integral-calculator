import React from 'react';
import { Card } from 'react-daisyui';
import { InlineMath } from 'react-katex';

import SuccessCardHeader from '@/~calc/CardHeader';
import useIndefiniteIntegrals from '@/~calc/useIndefiniteIntegrals';
import useToastAlert from '@/~global/useToastAlert';

const SuccessCard: React.FC = () => {
  const { result, expression } = useIndefiniteIntegrals();
  const { addToastAlert } = useToastAlert();

  const copyResult = () => {
    navigator.clipboard.writeText(`∫ ${expression} dx = ${result} + C`);
    addToastAlert('Resultado copiado al portapapeles', 'success');
  };

  const copyExplanation = () => {
    navigator.clipboard.writeText('No hay explicación disponible');
    addToastAlert('Explicación copiada al portapapeles', 'success');
  };

  return (
    <Card className='w-full max-w-xl mt-6 bg-primary'>
      <Card.Body className='grid grid-cols-1 gap-4'>
        <SuccessCardHeader title='Resultado' ButtonOnClick={copyResult} buttonText='Copiar' type='primary' />
        <p className='text-primary-content text-pretty'>
          <InlineMath math={`\\int ${expression} \\, dx = ${result} + C`} />
        </p>
        <SuccessCardHeader title='Explicación' ButtonOnClick={copyExplanation} buttonText='Copiar' type='primary' />
        <p className='text-primary-content text-pretty'>No hay explicación disponible</p>
      </Card.Body>
    </Card>
  );
};

export default SuccessCard;
