// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderComponent from './components/OrderComponent';
import Commande from './components/Commande';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrderComponent />} />
        <Route path="/commande" element={<Commande />} />
      </Routes>
    </Router>
  );
}

export default App;
