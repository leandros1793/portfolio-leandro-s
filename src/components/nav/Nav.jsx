import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import {RiRobot2Line} from 'react-icons/ri' // Ícono de robot/IA

const Nav = ({ onAIToggle, isChatbotOpen }) => { // Recibe función y estado del chatbot
  const [activeNav, setActiveNav] = useState('#')
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const handleAIClick = () => {
    onAIToggle(); // Llama función para abrir/cerrar chatbot
  }
   
  return (
  <nav className="floating-nav">
    <a 
      href={isHome ? '#' : '/'} 
      onClick={(e) => {
        if(isHome) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setActiveNav('#');
      }} 
      className={activeNav === '#' ? 'active' : '' }
      title="Inicio"
    >
      <BiHomeAlt/>
    </a>
    <a 
      href={isHome ? '#about' : '/#about'} 
      onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}
    >
      <BiUser/>
    </a>
    <a 
      href={isHome ? '#experience' : '/#experience'} 
      onClick={() => setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' : ''}
    >
      <BiBook/>
    </a>
    <a 
      href={isHome ? '#services' : '/#services'} 
      onClick={() => setActiveNav('#services')} 
      className={activeNav === '#services' ? 'active' : ''}
    >
      <RiServiceLine/>
    </a>
    <a 
      href={isHome ? '#contact' : '/#contact'} 
      onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}
    >
      <BiMessageDetail/>
    </a>
    {/* Nuevo botón de IA - usando mismo estilo que los enlaces */}
    <a 
      href="#" 
      onClick={(e) => { e.preventDefault(); handleAIClick(); }} 
      title="Asistente IA" 
      className={`ai-toggle ${isChatbotOpen ? 'chat-active' : ''}`}
    >
      <RiRobot2Line/>
    </a>
  </nav>
  )
}

export default Nav