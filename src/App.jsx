import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import PortfolioPage from './components/portfoliopage/PortfolioPage'; // Importa tu nuevo componente
import Home from './components/home/Home';
import Ecommerce from './components/eccomerce/Eccomerce';
import Blog from './components/blogs/Blog';
import Footer from './components/footer/Footer';
import Login from './components/Login/Login';

const App = () => {
  return (
    <Router>
      
      <Nav />
      <Routes>
        <Route path="/" element={<PortfolioPage />} /> {/* Usa el componente principal aquí */}
        <Route path="/home" element={<Home />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
