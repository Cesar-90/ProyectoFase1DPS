import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Asegúrate de la ruta correcta
import './index.css'; // O el archivo CSS que estés usando

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
