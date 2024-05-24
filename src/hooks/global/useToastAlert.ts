import { useContext } from 'react';

import toastAlertContext from '@/~global/toastAlertContext';

function useToastAlert() {
  const context = useContext(toastAlertContext);
  if (context === undefined) {
    throw new Error('useToastAlert must be used within a ToastAlertProvider');
  }
  return context;
}

export default useToastAlert;
