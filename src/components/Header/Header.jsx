import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Manejo de Recursos</h1>
      <a href="http://localhost:2727/schools" className="button-nav" target='blank'>Escolas (API)</a>
      <a href="http://localhost:2727" className="button-nav" target='blank'>Pra Onde Enviar Recursos?</a>
    </header>
  );
};

export default Header;
