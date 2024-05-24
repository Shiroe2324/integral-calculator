import React from 'react';
import { Button, Form } from 'react-daisyui';
import { EditableMathField } from 'react-mathquill';
import type { MathField } from 'react-mathquill';

import useDefiniteIntegrals from '@/~calc/useDefiniteIntegrals';

const IntegralForm: React.FC = () => {
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
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='form-control md:col-span-2'>
          <label className='label'>
            <span className='label-text drop-shadow-text'>Función a integrar</span>
          </label>
          <EditableMathField
            className='rounded-badge p-2'
            placeholder='ej: 3x^2 + 2x + 1'
            onChange={handleExpressionInputChange}
            onKeyDown={handleKeyDown}
            latex={expression}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text drop-shadow-text'>Límite superior</span>
          </label>
          <EditableMathField
            className='rounded-badge p-2'
            placeholder='ej: 3x^2 + 2x + 1'
            onChange={handleUpperLimitInputChange}
            onKeyDown={handleKeyDown}
            latex={upperLimit}
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text drop-shadow-text'>Límite inferior</span>
          </label>
          <EditableMathField
            className='rounded-badge p-2'
            placeholder='ej: 3x^2 + 2x + 1'
            onChange={handleLowerLimitInputChange}
            onKeyDown={handleKeyDown}
            latex={lowerLimit}
          />
        </div>
      </div>

      <Button color='primary' type='submit' className='w-full'>
        Calcular
      </Button>
    </Form>
  );
};

export default IntegralForm;
