import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social">
        <li>
          <a className='github' href="https://github.com/CristhyanL" target="_blank" rel="noopener noreferrer">
            <img className='redes' src='github.png' alt="Icone do Github" />
          </a>
        </li>
        <li>
          <a className='linkedin' href="https://www.linkedin.com/in/cristhyanlima/" target="_blank" rel="noopener noreferrer">
            <img className='redes' src='Linkedin.png' alt="Icone do LinkedIn" />
          </a>
        </li>
        <li>
          <a className='pda' href="https://programadoresdoamanha.org/" target="_blank" rel="noopener noreferrer">
            <img className='redes' src='PDA.png' alt="Icone do PDA" />
          </a>
        </li>
      </ul>
      <p className='cris'>&copy; 2024 Cristhyan Lima</p>
    </footer>
  );
};

export default Footer;

