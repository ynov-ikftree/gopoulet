// src/components/OrderComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import roastedChicken from '../assets/img/cuisse-de-poulet.png';
import logo from '../assets/img/logo.png';

const OrderComponent = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    // Redirige vers la page Commande pour le traitement
    navigate('/commande');
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
      <img src={logo} alt="GO POULET" style={styles.logo} />
        <img src={roastedChicken} alt="Poulet Rôti" style={styles.image} />
        <h2 style={styles.textHeader}>La faim n'attend pas.</h2>
        <p style={styles.text}>Votre poulet, si !</p>
        <button style={styles.button} onClick={handleOrderClick}>
          Commander un poulet
        </button>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#141414', 
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1em',
    backgroundColor: '#fff',
    borderRadius: '1em',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '20em',
  },
  image: {
    maxWidth: '70%',
    marginBottom: '1.25em',
  },
  logo: {
    maxWidth: '40%',
    marginBottom: '1.25em',
  },
  textTitle: {
    margin: '0',
    fontSize: '2em',
    color: '#',
  },
  textHeader: {
    margin: '0',
    fontSize: '1.125em',
    color: '#141414',
    fontWeight: 'bold',
  },
  text: {
    margin: '0',
    fontSize: '0.875em',
    color: '#555',
  },
  button: {
    marginTop: '1.25em',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '0.313em',
    cursor: 'pointer',
  },
};

export default OrderComponent;
