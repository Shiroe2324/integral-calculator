import React from 'react';
import { Button, Form } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { EditableMathField } from 'react-mathquill';
import type { MathField } from 'react-mathquill';

import useIndefiniteIntegrals from '@/~calc/useIndefiniteIntegrals';

const IntegralForm: React.FC = () => {
  const { t } = useTranslation('calc-indefinite-integrals');
  const { expression, handleExpressionChange, handleSubmit } = useIndefiniteIntegrals();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleExpressionInputChange = (e: MathField) => {
    handleExpressionChange(e.latex());
  };

  return (
    <Form className='w-full max-w-md gap-7' onSubmit={handleFormSubmit}>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text drop-shadow-text'>{t('expression-form.label')}</span>
        </label>
        <EditableMathField
          className='rounded-badge p-2'
          placeholder={t('expression-form.placeholder')}
          onChange={handleExpressionInputChange}
          onKeyDown={handleKeyDown}
          latex={expression}
        />
      </div>

      <Button color='primary' type='submit' className='w-full'>
        {t('expression-form.submit')}
      </Button>
    </Form>
  );
};

export default IntegralForm;
