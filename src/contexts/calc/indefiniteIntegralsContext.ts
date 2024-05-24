import { createContext } from 'react';

interface IndefiniteIntegralsContextType {
  result: string;
  error: string;
  expression: string;
  handleExpressionChange: (exp: string) => void;
  handleSubmit: () => void;
}

const IndefiniteIntegralsContext = createContext<IndefiniteIntegralsContextType>({
  result: '',
  error: '',
  expression: '',
  handleExpressionChange: () => {},
  handleSubmit: () => {},
});

export default IndefiniteIntegralsContext;
