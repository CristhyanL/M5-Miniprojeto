import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import Features from '../Features/Features';
import AddFeatureForm from '../Features/AddFeatureForm';
import Footer from '../Footer/Footer';
import useFetch from '../../hooks/useFetch';
import './App.css';

const App = () => {
  const { data, loading, error, refetch } = useFetch('http://localhost:2727/schools');
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (data) {
      setFeatures(data);
    }
  }, [data]);

  const handleAddFeature = async (newFeature) => {
    try {
      const response = await fetch('http://localhost:2727/createSchool', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeature),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      await refetch(); // Recarregar os dados após adicionar um novo recurso
    } catch (err) {
      console.error('Erro ao adicionar dados:', err);
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <Header />
      <MainSection />
      <AddFeatureForm onAdd={handleAddFeature} />
      <Features featuresData={features} />
      <Footer />
    </div>
  );
};

export default App;
