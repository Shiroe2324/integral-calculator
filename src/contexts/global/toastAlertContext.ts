import { createContext } from 'react';

import type { AlertStatus, DynamicToastChild } from '@/~types/AlertStatus';

interface ToastAlertContextType {
  alerts: DynamicToastChild[];
  addToastAlert: (alertText: string, status: AlertStatus) => void;
  removeToastAlert: (index: number) => void;
}

const toastAlertContext = createContext<ToastAlertContextType>({
  alerts: [],
  addToastAlert: () => {},
  removeToastAlert: () => {},
});

export default toastAlertContext;
