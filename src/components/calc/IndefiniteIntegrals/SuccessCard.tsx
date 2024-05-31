import React from 'react';
import { Card } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { InlineMath } from 'react-katex';

import SuccessCardHeader from '@/~calc/CardHeader';
import useIndefiniteIntegrals from '@/~calc/useIndefiniteIntegrals';
import useToastAlert from '@/~global/useToastAlert';

const SuccessCard: React.FC = () => {
  const { t } = useTranslation('calc-indefinite-integrals');
  const { result, expression } = useIndefiniteIntegrals();
  const { addToastAlert } = useToastAlert();

  const copyResult = () => {
    navigator.clipboard.writeText(`∫ ${expression} dx = ${result} + C`);
    addToastAlert(t('success-card.result.copy.message'), 'success');
  };

  const copyExplanation = () => {
    navigator.clipboard.writeText(t('success-card.explanation.message'));
    addToastAlert(t('success-card.explanation.copy.message'), 'success');
  };

  return (
    <Card className='mt-6 w-full max-w-xl bg-primary xl:max-w-md'>
      <Card.Body className='grid grid-cols-1 gap-4'>
        <SuccessCardHeader
          title={t('success-card.result.title')}
          ButtonOnClick={copyResult}
          buttonText={t('success-card.result.copy.label')}
          type='primary'
        />
        <p className='text-primary-content'>
          <InlineMath math={`\\int ${expression} \\, dx = ${result} + C`} />
        </p>
        <SuccessCardHeader
          title={t('success-card.explanation.title')}
          ButtonOnClick={copyExplanation}
          buttonText={t('success-card.explanation.copy.label')}
          type='primary'
        />
        <p className='text-pretty text-primary-content'>{t('success-card.explanation.message')}</p>
      </Card.Body>
    </Card>
  );
};

export default SuccessCard;
