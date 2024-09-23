import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <section className="main-section">
      <h1 className="title">Escolas da cidade de São Gonçalo</h1>
      <p className="text">Adicione dados das escolas da cidade na nossa API, para que possamos visualizar estratégicamente, para qual delas o governo deverá mandar mais recursos, de acordo com a maior necessidade.</p>
      <p className='text'>Adicione os dados de forma adequada e correta.</p>
      <p className='text'>🚨Atente-se: nos campos listados a seguir só será permitido o uso de NÚMEROS. Alem desses, o campo "Image URL" deve ser uma URL real.</p>
        <li>InepCode</li>
        <li>Contact</li>
        <li>Employees</li>
        <li>Teachers</li>
        <li>Classrooms</li>
        <li>Students Quantity</li>
        <li>Libraries</li>
        <li>Laboratories</li>
    </section>
  );
};

export default MainSection;
