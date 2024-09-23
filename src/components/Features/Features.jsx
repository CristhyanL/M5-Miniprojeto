import React from 'react';
import './Features.css';

const Features = ({ featuresData }) => {
  // Certifique-se de que os dados são um array
  if (!Array.isArray(featuresData)) {
    return <p>Seus registros aparecerão aqui</p>;
  }

  // Verifique se há dados para exibir
  if (featuresData.length === 0) {
    return <p>Nenhuma escola encontrada.</p>;
  }

  return (
    <div className="features">
      <h2>Escolas</h2>
      <ul>
        {featuresData.map((feature, index) => (
          <li key={feature.id || index} className="feature-item">
            <strong>Nome:</strong> {feature.name || 'Sem nome'}
            <br />
            <strong>INEP Code:</strong> {feature.InepCode || 'Sem código'}
            <br />
            <strong>Endereço:</strong> {feature.address || 'Sem endereço'}
            <br />
            <strong>Bairro:</strong> {feature.bairro || 'Sem bairro'}
            <br />
            <strong>Contato:</strong> {feature.contact || 'Sem contato'}
            <br />
            <strong>Funcionários:</strong> {feature.employees || 'Sem dados'}
            <br />
            <strong>Professores:</strong> {feature.teachers || 'Sem dados'}
            <br />
            <strong>Salas:</strong> {feature.classrooms || 'Sem dados'}
            <br />
            <strong>Quantidade de Alunos:</strong> {feature.students_quantity || 'Sem dados'}
            <br />
            <strong>Bibliotecas:</strong> {feature.libraries || 'Sem dados'}
            <br />
            <strong>Laboratórios:</strong> {feature.laboratories || 'Sem dados'}
            <br />
            <strong>Internet:</strong> {feature.internet || 'Sem dados'}
            <br />
            <strong>Banheiro Acessível:</strong> {feature.accessible_bathroom || 'Sem dados'}
            <br />
            {feature.imageUrl ? (
              <img src={feature.imageUrl} alt="Imagem da Escola" className="school-image" />
            ) : (
              <span>Sem imagem:</span>
            )} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
