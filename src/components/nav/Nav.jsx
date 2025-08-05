import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'
import {RiRobot2Line} from 'react-icons/ri' // Ícono de robot/IA
import { useState } from 'react'

const Nav = ({ onAIToggle, isChatbotOpen }) => { // Recibe función y estado del chatbot
  const [activeNav, setActiveNav] = useState('#')
  
  const handleAIClick = () => {
    onAIToggle(); // Llama función para abrir/cerrar chatbot
    // No cambiamos activeNav porque es un modal, no una sección
  }
   
  return (
  <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : '' }>
      <BiHomeAlt/>
    </a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
      <BiUser/>
    </a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
      <BiBook/>
    </a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
      <RiServiceLine/>
    </a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
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