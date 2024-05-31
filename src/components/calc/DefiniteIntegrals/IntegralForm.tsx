import React from 'react';
import { Button, Form } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { EditableMathField } from 'react-mathquill';
import type { MathField } from 'react-mathquill';

import useDefiniteIntegrals from '@/~calc/useDefiniteIntegrals';

const IntegralForm: React.FC = () => {
  const { t } = useTranslation('calc-definite-integrals');
  const {
    expression,
    upperLimit,
    lowerLimit,
    handleExpressionChange,
    handleUpperLimitChange,
    handleLowerLimitChange,
    handleSubmit,
  } = useDefiniteIntegrals();

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

  const handleUpperLimitInputChange = (e: MathField) => {
    handleUpperLimitChange(e.latex());
  };

  const handleLowerLimitInputChange = (e: MathField) => {
    handleLowerLimitChange(e.latex());
  };

  return (
    <Form className='w-full max-w-md gap-7' onSubmit={handleFormSubmit}>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
        <div className='form-control md:col-span-2'>
          <label className='label'>
            <span className='label-text drop-shadow-text'>{t('expression-form.expression.label')}</span>
          </label>
          <EditableMathField
            className='rounded-badge p-2'
            placeholder={t('expression-form.expression.placeholder')}
            onChange={handleExpressionInputChange}
            onKeyDown={handleKeyDown}
            latex={expression}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text drop-shadow-text'>{t('expression-form.upper-limit.label')}</span>
          </label>
          <EditableMathField
            className='rounded-badge p-2'
            placeholder={t('expression-form.upper-limit.placeholder')}
            onChange={handleUpperLimitInputChange}
            onKeyDown={handleKeyDown}
            latex={upperLimit}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text drop-shadow-text'>{t('expression-form.lower-limit.label')}</span>
          </label>
          <EditableMathField
            className='rounded-badge p-2'
            placeholder={t('expression-form.lower-limit.placeholder')}
            onChange={handleLowerLimitInputChange}
            onKeyDown={handleKeyDown}
            latex={lowerLimit}
          />
        </div>
      </div>

      <Button color='primary' type='submit' className='w-full'>
        {t('expression-form.submit')}
      </Button>
    </Form>
  );
};

export default IntegralForm;
