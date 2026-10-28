import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { LangProvider } from './i18n/index.jsx';
// Self-hosted fonts (no third-party font requests)
import '@fontsource-variable/archivo/wdth.css';
import '@fontsource-variable/instrument-sans/index.css';
import '@fontsource-variable/unbounded/index.css';
import '@fontsource-variable/roboto-flex/wdth.css';
import '@fontsource-variable/onest/index.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>,
);
