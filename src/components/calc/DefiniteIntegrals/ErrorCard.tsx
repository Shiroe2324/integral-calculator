import React from 'react';
import { Card } from 'react-daisyui';
import { useTranslation } from 'react-i18next';

import SuccessCardHeader from '@/~calc/CardHeader';
import useDefiniteIntegrals from '@/~calc/useDefiniteIntegrals';
import useToastAlert from '@/~global/useToastAlert';

const ErrorCard: React.FC = () => {
  const { t } = useTranslation('calc-definite-integrals');
  const { error } = useDefiniteIntegrals();
  const { addToastAlert } = useToastAlert();

  const copyError = () => {
    navigator.clipboard.writeText(error);
    addToastAlert(t('error-card.copy.message'), 'success');
  };

  return (
    <Card className='mt-6 w-full max-w-xl bg-error'>
      <Card.Body>
        <SuccessCardHeader
          title={t('error-card.title')}
          ButtonOnClick={copyError}
          buttonText={t('error-card.copy.label')}
          type='error'
        />
        <p className='text-error-content'>{t('error-card.message')}</p>
        <p className='text-error-content'>{error}</p>
      </Card.Body>
    </Card>
  );
};

export default ErrorCard;
