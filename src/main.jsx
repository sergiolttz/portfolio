import React from 'react';
import ReactDOM from 'react-dom/client';

// Importar estilos globales
import './assets/styles/main.scss';

// Importar componente raíz
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
