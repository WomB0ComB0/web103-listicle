import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});

const appContainer = document.createElement('div');

appContainer.id = 'app'; 

document.body.appendChild(appContainer);

ReactDOM.createRoot(appContainer).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
