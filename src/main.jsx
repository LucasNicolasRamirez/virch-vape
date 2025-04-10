import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { CartProvider } from '../src/Components/ContextoCarrito/ContextoCarrito.jsx'; // Importa el proveedor del contexto

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* Envuelve App con el proveedor del contexto */}
      <App />
    </CartProvider>
  </StrictMode>,
);
