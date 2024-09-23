import React, { useState } from 'react';
import './AddFeatureForm.css'; // Para estilos específicos
import Alert from '../Alert/Alert.jsx'; // Importar o componente de alerta

const AddFeatureForm = ({ onAdd }) => {
  const initialFormState = {
    name: '',
    InepCode: '',
    address: '',
    bairro: '',
    contact: '',
    employees: '',
    teachers: '',
    classrooms: '',
    students_quantity: '',
    libraries: '',
    laboratories: '',
    internet: '',
    accessible_bathroom: '',
    imageUrl: '',
  };
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    if (Object.values(formData).some(value => value === '')) {
      setError('Todos os campos são obrigatórios');
      return false;
    }

    // Validar se campos numéricos contêm apenas números
    const numberFields = ['InepCode', 'contact', 'employees', 'teachers', 'classrooms', 'students_quantity', 'libraries', 'laboratories'];

    if (numberFields.some(field => isNaN(Number(formData[field])))) {
      setError('Campos numéricos devem conter apenas números');
      return false;
    }

    // Validar URL
    try {
      new URL(formData.imageUrl); // Tenta criar um objeto URL para verificar se é uma URL válida
    } catch (_) {
      setError('URL da imagem inválida');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {const response = await fetch('http://localhost:2727/createSchool', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Erro ao adicionar escola: ${response.statusText}`);
    }

    onAdd(await response.json());
      setFormData(initialFormState);
      setError(null);
    } catch (err) {
      setError('Erro ao adicionar escola.');
    }
  };

  return (
    <div className="add-feature-form">
      <h2>Adicionar Escola</h2>
      <Alert message={error} onClose={() => setError(null)} />
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key.replace(/_/g, ' ').toUpperCase()}:</label>
            <input
              type={['InepCode', 'contact', 'employees', 'teachers', 'classrooms', 'students_quantity', 'libraries', 'laboratories'].includes(key) ? 'number' : 'text'}
              id={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddFeatureForm;
