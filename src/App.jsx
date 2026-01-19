import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header'; // <-- ELIMINADO PORQUE NO SE USABA
import Nav from './components/nav/Nav';
import PortfolioPage from './components/portfoliopage/PortfolioPage';
import Home from './components/home/Home';
import Ecommerce from './components/eccomerce/Eccomerce';
import Blog from './components/blogs/Blog';
import Footer from './components/footer/Footer';
import Login from './components/Login/Login';

// Importamos el Chat y el Icono del robot
import AIChatbot from './components/AIChatbot/AIChatbot'; 
import { RiRobot2Line } from 'react-icons/ri'; 

const App = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <Router>
      {/* Si quieres que el Nav también pueda abrir el chat, déjalo así.
         Si no, puedes quitar las props onAIToggle e isChatbotOpen.
      */}
      <Nav 
        onAIToggle={() => setIsChatbotOpen(!isChatbotOpen)} 
        isChatbotOpen={isChatbotOpen} 
      />
      
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
      
      {/* --- BOTÓN FLOTANTE (Siempre visible) --- */}
      {!isChatbotOpen && (
        <button 
          onClick={() => setIsChatbotOpen(true)}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#4db5ff', // Azul moderno (puedes cambiarlo a tu color)
            color: 'white',
            border: 'none',
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
            cursor: 'pointer',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          title="Hablar con el Asistente IA"
        >
          <RiRobot2Line size={28} />
        </button>
      )}

      {/* --- VENTANA DEL CHATBOT --- */}
      {isChatbotOpen && (
        <AIChatbot onClose={() => setIsChatbotOpen(false)} />
      )}
    </Router>
  );
};

export default App;