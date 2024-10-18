import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';  
import './styles/global.css';  
import './components/App/App.css'; 

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})


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