// src/components/OrderComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import roastedChicken from '../assets/img/cuisse-de-poulet.png';
import logo from '../assets/img/logo.png';
import commonStyles from '../styles/commonStyles';

const OrderComponent = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/commande');
  };

  return (
    <div style={commonStyles.pageContainer}>
      <div style={commonStyles.contentContainer}>
      <img src={logo} alt="Logo" style={commonStyles.logo} />
        <img src={roastedChicken} alt="Poulet Rôti" style={commonStyles.image} />
        <h2 style={commonStyles.textHeader}>La faim n'attend pas.</h2>
        <p style={commonStyles.text}>Votre poulet, si !</p>
        <button style={commonStyles.button} onClick={handleOrderClick}>
          Commander un poulet
        </button>
      </div>
    </div>
  );
};

export default OrderComponent;
