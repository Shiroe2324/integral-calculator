import React, { useState } from 'react';

import IndefiniteIntegralsContext from '@/~calc/indefiniteIntegralsContext';
import { indefiniteIntegral, texToString } from '@/~integrals';

interface IndefiniteIntegralsProviderProps {
  children: React.ReactNode;
}

const IndefiniteIntegralsProvider: React.FC<IndefiniteIntegralsProviderProps> = ({ children }) => {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [expression, setExpression] = useState<string>('');

  const handleExpressionChange = (exp: string) => {
    setExpression(exp);
  };

  const handleSubmit = () => {
    try {
      const integral = indefiniteIntegral(texToString(expression), 'x');
      setError('');
      setResult(integral.toTeX());
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setResult('');
        setError(error.message);
      }
    }
  };

  return (
    <IndefiniteIntegralsContext.Provider value={{ result, error, expression, handleExpressionChange, handleSubmit }}>
      {children}
    </IndefiniteIntegralsContext.Provider>
  );
};

export default IndefiniteIntegralsProvider;
