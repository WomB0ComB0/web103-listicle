import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// import UsePageLoading from './hooks/useLoading.jsx';
// import Loading from './components/dom-states/Loading.jsx';
import '../styles.scss';
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
});


const root = document.createElement('div');
root.id = 'root';

document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.Fragment>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </React.Fragment>
);