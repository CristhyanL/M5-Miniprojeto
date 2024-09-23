import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';  
import './styles/global.css';  
import './components/App/App.css'; 

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