import React, { useState } from 'react';
import { Alert, Button, Toast } from 'react-daisyui';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';
import { MdCheckCircleOutline, MdOutlineDangerous, MdOutlineInfo } from 'react-icons/md';

import toastAlertContext from '@/~global/toastAlertContext';
import type { AlertStatus, DynamicToastChild } from '@/~types/AlertStatus';

type AlertStatusIcons = {
  [key in AlertStatus]: React.ReactNode;
};

interface ToastAlertProviderProps {
  children: React.ReactNode;
}

const ToastAlertProvider: React.FC<ToastAlertProviderProps> = ({ children }) => {
  const [alerts, setAlerts] = useState<DynamicToastChild[]>([]);

  const alertStatusIcons: AlertStatusIcons = {
    success: <MdCheckCircleOutline size={24} />,
    info: <MdOutlineInfo size={24} />,
    error: <MdOutlineDangerous size={24} />,
    warning: <AiOutlineExclamationCircle size={24} />,
  };

  const addToastAlert = (text: string, status: AlertStatus) => {
    setAlerts((alerts) => [...alerts, { text, status }]);
  };

  const removeToastAlert = (index: number) => {
    setAlerts((alerts) => alerts.filter((_, i) => i !== index));
  };

  const renderAlerts = () => {
    return alerts.map((alert, index) => {
      return (
        <Alert key={index} status={alert.status} className='shadow-lg' icon={alertStatusIcons[alert.status]}>
          <span>{alert.text}</span>
          <Button color='ghost' onClick={() => removeToastAlert(index)}>
            <IoCloseOutline size={24} />
          </Button>
        </Alert>
      );
    });
  };

  return (
    <toastAlertContext.Provider value={{ alerts, addToastAlert, removeToastAlert }}>
      {children}

      <Toast horizontal='end' vertical='bottom' className='w-full lg:w-auto'>
        {renderAlerts()}
      </Toast>
    </toastAlertContext.Provider>
  );
};

export default ToastAlertProvider;
