// src/components/Commande.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Commande = () => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simuler l'appel à l'API pour traiter la commande
    console.log('Traitement de la commande en cours...');
    
    setTimeout(() => {
      setIsOrderComplete(true);
      console.log('La commande a été traitée.');
    }, 2000); // En attente de 2 secondes pour simuler l'appel à l'API
  }, []);

  return (
    <div>
      {!isOrderComplete ? (
        <h2>Traitement de votre commande en cours...</h2>
      ) : (
        <div>
          <h1>Commande réussie, merci !</h1>
          <p>Votre commande est confirmée. Vous recevrez votre QR code sous peu.</p>
          {/**/}
        </div>
      )}
      {/* Bouton pour retourner à la page d'accueil */}
      <button onClick={() => navigate('/')}>Retour à l'accueil</button>
    </div>
  );
};

export default Commande;
