// src/components/Commande.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import commonStyles from '../styles/commonStyles';
import logo from '../assets/img/logo.png';

const Commande = () => {
  const [orderStatus, setOrderStatus] = useState('Traitement en cours...');
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const uniqueId = uuidv4();
    setOrderId(uniqueId);

    setTimeout(() => {
      setOrderStatus('Commande réussie, merci !');
    }, 2000);
  }, []);

  return (
    <div style={commonStyles.pageContainer}>
      <div style={commonStyles.contentContainer}>
        <img src={logo} alt="Logo" style={commonStyles.logo} />
        <h1>Status de la commande</h1>
        <p>{orderStatus}</p>
        {orderStatus === 'Commande réussie, merci !' && (
          <>
            <p>Votre commande est confirmée.</p>
            <p>ID de commande: {orderId}</p>
          </>
        )}
        <button style={commonStyles.button} onClick={() => navigate('/')}>
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Commande;
