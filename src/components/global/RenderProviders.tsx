import React from 'react';
import { addStyles } from 'react-mathquill';

import ThemeProvider from '@/~global/ThemeProvider';
import ToastAlertProvider from '@/~global/ToastAlertProvider';
import '@/~styles/main.css';

addStyles();

interface RenderProvidersProps {
  children: React.ReactNode;
}

const RenderProviders: React.FC<RenderProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <ToastAlertProvider>{children}</ToastAlertProvider>
    </ThemeProvider>
  );
};

export default RenderProviders;
