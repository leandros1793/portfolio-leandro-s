import React, { useState, useEffect } from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const roles = [
  'Técnico en Desarrollo Web',
  'E-commerce & Shopify Expert',
  'Sistemas Backend Node.js & .NET',
  'Soporte Linux VPS & DevOps'
];

const Header = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Escribiendo
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);
        
        if (currentText === fullText) {
          // Pausa al terminar de escribir
          setTypingSpeed(1800);
          setIsDeleting(true);
        }
      } else {
        // Borrando
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <header id="home">
      <div className="container header__container">
        <h5 className="welcome-tag">Hola, soy</h5>
        <h1 className="main-name">Leandro Santiago</h1>
        <h2 className="role-typing">
          <span>{currentText}</span>
          <span className="role-cursor">|</span>
        </h2>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;