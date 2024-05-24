import { createContext } from 'react';

interface DefiniteIntegralsContextType {
  result: string;
  error: string;
  expression: string;
  upperLimit: string;
  lowerLimit: string;
  handleExpressionChange: (exp: string) => void;
  handleLowerLimitChange: (limit: string) => void;
  handleUpperLimitChange: (limit: string) => void;
  handleSubmit: () => void;
}

const definiteIntegralsContext = createContext<DefiniteIntegralsContextType>({
  result: '',
  error: '',
  expression: '',
  upperLimit: '',
  lowerLimit: '',
  handleExpressionChange: () => {},
  handleLowerLimitChange: () => {},
  handleUpperLimitChange: () => {},
  handleSubmit: () => {},
});

export default definiteIntegralsContext;
