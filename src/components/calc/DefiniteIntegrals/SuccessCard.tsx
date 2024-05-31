import React from 'react';
import { Card } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { InlineMath } from 'react-katex';

import SuccessCardHeader from '@/~calc/CardHeader';
import useDefiniteIntegrals from '@/~calc/useDefiniteIntegrals';
import useToastAlert from '@/~global/useToastAlert';

const SuccessCard: React.FC = () => {
  const { t } = useTranslation('calc-definite-integrals');
  const { result, expression, upperLimit, lowerLimit } = useDefiniteIntegrals();
  const { addToastAlert } = useToastAlert();

  const copyResult = () => {
    navigator.clipboard.writeText(`∫{${lowerLimit}}^{${upperLimit}} ${expression} dx = ${result}`);
    addToastAlert(t('success-card.result.copy.message'), 'success');
  };

  const copyExplanation = () => {
    navigator.clipboard.writeText(t('success-card.explanation.message'));
    addToastAlert(t('success-card.explanation.copy.message'), 'success');
  };

  const parsedUpperLimit = upperLimit === '' ? '\\infty' : upperLimit;
  const parsedLowerLimit = lowerLimit === '' ? '-\\infty' : lowerLimit;

  return (
    <Card className='mt-6 w-full max-w-xl bg-primary xl:max-w-md'>
      <Card.Body className='grid grid-cols-1 gap-4'>
        <SuccessCardHeader
          title={t('success-card.result.title')}
          ButtonOnClick={copyResult}
          buttonText={t('success-card.result.copy.label')}
          type='primary'
        />
        <p className='text-pretty text-primary-content'>
          <InlineMath math={`\\int_{${parsedLowerLimit}}^{${parsedUpperLimit}} ${expression} \\, dx = ${result}`} />
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
