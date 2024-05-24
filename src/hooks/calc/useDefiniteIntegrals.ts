import { useContext } from 'react';

import definiteIntegralsContext from '@/~calc/definiteIntegralsContext';

export function useDefiniteIntegrals() {
  const context = useContext(definiteIntegralsContext);
  if (context === undefined) {
    throw new Error('useDefiniteIntegrals must be used within a DefiniteIntegralsProvider');
  }
  return context;
}

export default useDefiniteIntegrals;
