import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';  // Verifique se o caminho está correto
import './styles/global.css';  // Estilos globais
import './components/App/App.css';  // Estilos específicos do App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const toggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

document.addEventListener('DOMContentLoaded', () => {
  const someElement = document.querySelector('#someElement');
  
  if (someElement) {
    someElement.addEventListener('click', () => {
      console.log('Elemento clicado!');
    });
  }
});