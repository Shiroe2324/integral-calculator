import React, { useState } from 'react';

import DefiniteIntegralsContext from '@/~calc/definiteIntegralsContext';
import { definiteIntegral, texToString } from '@/~integrals';

interface DefiniteIntegralsProviderProps {
  children: React.ReactNode;
}

const DefiniteIntegralsProvider: React.FC<DefiniteIntegralsProviderProps> = ({ children }) => {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [expression, setExpression] = useState<string>('');
  const [upperLimit, setUpperLimit] = useState<string>('');
  const [lowerLimit, setLowerLimit] = useState<string>('');

  const handleExpressionChange = (exp: string) => {
    setExpression(exp);
  };

  const handleUpperLimitChange = (limit: string) => {
    setUpperLimit(limit);
  };

  const handleLowerLimitChange = (limit: string) => {
    setLowerLimit(limit);
  };

  const handleSubmit = () => {
    try {
      const integral = definiteIntegral(texToString(expression), 'x', texToString(lowerLimit), texToString(upperLimit));
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
    <DefiniteIntegralsContext.Provider
      value={{
        result,
        error,
        expression,
        upperLimit,
        lowerLimit,
        handleExpressionChange,
        handleUpperLimitChange,
        handleLowerLimitChange,
        handleSubmit,
      }}
    >
      {children}
    </DefiniteIntegralsContext.Provider>
  );
};

export default DefiniteIntegralsProvider;
