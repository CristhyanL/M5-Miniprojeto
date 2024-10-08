import React, { useState } from 'react';
import './AddFeatureForm.css'; 
import Alert from '../Alert/Alert.jsx'; 

const AddFeatureForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
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
  });
  
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some(value => value === '')) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    const numberFields = [
      'InepCode', 'contact', 'employees', 'teachers', 
      'classrooms', 'students_quantity', 'libraries', 
      'laboratories'
    ];

    if (numberFields.some(field => isNaN(Number(formData[field])))) {
      setError('Campos numéricos devem conter apenas números');
      return;
    }

    try {
      new URL(formData.imageUrl);
    } catch (_) {
      setError('URL da imagem inválida');
      return;
    }

    const payload = {
      name: formData.name,
      InepCode: Number(formData.InepCode),
      address: formData.address,
      bairro: formData.bairro,
      contact: Number(formData.contact),
      employees: Number(formData.employees),
      teachers: Number(formData.teachers),
      classrooms: Number(formData.classrooms),
      students_quantity: Number(formData.students_quantity),
      libraries: Number(formData.libraries),
      laboratories: Number(formData.laboratories),
      internet: formData.internet,
      accessible_bathroom: formData.accessible_bathroom,
      imageUrl: formData.imageUrl,
    };

    try {
      const response = await fetch('http://localhost:2727/createSchool', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const newFeature = await response.json();
      onAdd(newFeature); 
      setSuccessMessage(`Obrigado por adicionar uma nova escola à nossa API! Você pode ver esse registro clicando no botão: ${newFeature.name || 'Escolas(API)'} no topo da página. Agradecemos sua contribuição`);

      setFormData({
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
      });
      setError(null);
    } catch (err) {
      setError('Erro ao adicionar dados.');
    }
  };

  return (
    <div className="add-feature-form">
      <h2>Adicionar Escola</h2>
      
      <Alert message={error} onClose={() => setError(null)} />
      
      <Alert message={successMessage} onClose={() => setSuccessMessage(null)} />

      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key.replace(/_/g, ' ').toUpperCase()}:</label>
            <input
              type={key === 'InepCode' || key === 'contact' || key === 'employees' || key === 'teachers' || key === 'classrooms' || key === 'students_quantity' || key === 'libraries' || key === 'laboratories' ? 'number' : 'text'}
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