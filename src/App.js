import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Marketplace from './components/Marketplace';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/marketplace" element={<Marketplace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;