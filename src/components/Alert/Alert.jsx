import React from 'react';
import './Alert.css';

const Alert = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Alert;
