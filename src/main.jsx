// src/main.jsx (Modificación para usar dos archivos CSS)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Importa el CSS global
import './App.css';   // Importa el CSS de componentes

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);