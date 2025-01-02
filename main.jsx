
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error('No root element found in the HTML file.');
}

 

