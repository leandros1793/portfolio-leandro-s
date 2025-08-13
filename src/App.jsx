import React, { useState } from 'react'; // Importar useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import PortfolioPage from './components/portfoliopage/PortfolioPage';
import Home from './components/home/Home';
import Ecommerce from './components/eccomerce/Eccomerce';
import Blog from './components/blogs/Blog';
import Footer from './components/footer/Footer';
import Login from './components/Login/Login';
import AIChatbot from './components/AIChatbot/AIChatbot'; // Importar el chatbot


const App = () => {
  // Estado para controlar el chatbot
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <Router>
          
            <Nav 
        onAIToggle={() => setIsChatbotOpen(!isChatbotOpen)} 
        isChatbotOpen={isChatbotOpen} 
      />

      
      {isChatbotOpen && (
        <AIChatbot onClose={() => setIsChatbotOpen(false)} />
      )}
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      
      {/* Chatbot condicional - se muestra en todas las páginas */}
      {isChatbotOpen && (
        <AIChatbot onClose={() => setIsChatbotOpen(false)} />
      )}
    </Router>
  );
};

export default App;