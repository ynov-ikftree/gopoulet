// src/components/Commande.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Commande = () => {
  const [orderStatus, setOrderStatus] = useState('Traitement en cours...');
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Générer un ID unique pour la commande
    const uniqueId = uuidv4();
    setOrderId(uniqueId);

    // Simuler l'appel à l'API pour traiter la commande
    console.log('Traitement de la commande en cours...');
    
    setTimeout(() => {
      setOrderStatus('Commande réussie, merci !');
      console.log('La commande a été traitée.');
      // Ici, vous pouvez également envoyer l'orderId au backend et obtenir un QR code en réponse
    }, 2000); // Simule un délai de traitement de commande de 2 secondes
  }, []);

  return (
    <div style={styles.container}>
      <h1>Status de la commande</h1>
      <p>{orderStatus}</p>
      {orderStatus === 'Commande réussie, merci !' && (
        <>
          <p>Votre commande est confirmée.</p>
          <p>ID de commande: {orderId}</p>
          {/* Afficher le QR code ici si nécessaire */}
        </>
      )}
      {/* Bouton pour retourner à la page d'accueil */}
      <button style={styles.button} onClick={() => navigate('/')}>
        Retour à l'accueil
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px', // Ajuster selon la mise en page
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Commande;
