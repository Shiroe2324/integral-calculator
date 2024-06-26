import 'katex/dist/katex.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import RenderProviders from '@/~global/RenderProviders';
import App from '@app';
import '@i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RenderProviders>
      <App />
    </RenderProviders>
  </React.StrictMode>,
);
