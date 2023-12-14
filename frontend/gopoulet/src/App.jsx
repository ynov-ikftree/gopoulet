import React from 'react';
import roastedChicken from './assets/img/cuisse-de-poulet.png';

const OrderComponent = ({ onOrderClick }) => {
  return (
    <div style={styles.container}>
      <img src={roastedChicken} alt="Poulet Rôti" style={styles.image} />
      <h2 style={styles.textHeader}>La faim n'attend pas.</h2>
      <p style={styles.text}>Votre poulet, si !</p>
      <button style={styles.button} onClick={onOrderClick}>
        GO POULET ! QUEL GRÂCE JE VAIS GOUTER LE CERISE HMMM
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
    padding: '20px',
    backgroundColor: '#fff', 
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    maxWidth: '300px', 
  },
  image: {
    maxWidth: '100%', 
    marginBottom: '20px', 
  },
  textHeader: {
    margin: '0',
    fontSize: '18px', 
    color: '#000', 
    fontWeight: 'bold', 
  },
  text: {
    margin: '0',
    fontSize: '14px', 
    color: '#555', 
  },
  button: {
    marginTop: '20px', 
    padding: '10px 20px', 
    fontSize: '16px', 
    color: '#fff', 
    backgroundColor: '#4CAF50', 
    border: 'none', 
    borderRadius: '5px',
    cursor: 'pointer', 
  },
};

export default OrderComponent;
