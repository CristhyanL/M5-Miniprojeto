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

toggleButton.addEventListener('click', () => {
  bodyElement.classList.toggle('light-theme');
});


// My-Project/
// ├──public
// ├──src/
//   ├── assets
//   ├── components/
//   │   ├── App/
//   │   │   ├── App.jsx
//   │   │   └── App.css
//   │   ├── Features/
//   │   │   ├── Features.jsx
//   │   │   └── Features.css
//   │   ├── Footer/
//   │   │   ├── Footer.jsx
//   │   │   └── Footer.css
//   │   ├── Header/
//   │   │   ├── Header.jsx
//   │   │   └── Header.css
//   │   ├── MainSection/
//   │   │   ├── MainSection.jsx
//   │   │   └── MainSection.css
//   ├── hooks/
//   │   ├── useFetch.jsx
//   ├── services/
//   │   ├── API.js
//   ├── styles/
//   │   ├── global.css
//   ├── main.jsx
// ├──index.html
// ├──.gitignore
// ├──eslintconfig.js
// ├──package-lock.json
// ├──package.json
// ├──README.md
// ├──vite.config.js


