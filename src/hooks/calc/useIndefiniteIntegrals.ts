import { useContext } from 'react';

import indefiniteIntegralsContext from '@/~calc/indefiniteIntegralsContext';

export function useIndefiniteIntegrals() {
  const context = useContext(indefiniteIntegralsContext);
  if (context === undefined) {
    throw new Error('useIndefiniteIntegrals must be used within a IndefiniteIntegralsProvider');
  }
  return context;
}

export default useIndefiniteIntegrals;
