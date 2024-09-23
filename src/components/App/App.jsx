import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MainSection from '../MainSection/MainSection';
import Features from '../Features/Features';
import AddFeatureForm from '../Features/AddFeatureForm';
import Footer from '../Footer/Footer';
import useFetch from '../../hooks/useFetch';
import './App.css';

const App = () => {
  const { data: features, loading, error, refetch } = useFetch('http://localhost:2727/schools');
  const [newFeatures, setNewFeatures] = useState([]);

  useEffect(() => {
    if (features) {
      setNewFeatures(features);
    }
  }, [features]);

  const handleAddFeature = async (newFeature) => {
    try {
      const response = await fetch('http://localhost:2727/createSchool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

  return (
    <div className="App">
      <Header />
      <MainSection />
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <>
        <AddFeatureForm onAdd={handleAddFeature} />
        <Features featuresData={newFeatures} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
