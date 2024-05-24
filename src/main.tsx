import 'katex/dist/katex.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import RenderProviders from '@/~global/RenderProviders';
import App from '@app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RenderProviders>
      <App></App>
    </RenderProviders>
  </React.StrictMode>,
);
