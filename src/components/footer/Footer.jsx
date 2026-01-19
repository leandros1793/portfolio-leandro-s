import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      {/* CORREGIDO: href="#home" en lugar de "#" para evitar error de Vercel */}
      <a href="#home" className='footer__logo'>
        Leandro Santiago
        <span style={{ display: 'block', fontSize: '0.9rem', marginTop: '0.5rem', opacity: '0.8', fontWeight: 'normal' }}>
          Técnico en Desarrollo Web
        </span>
      </a>

      {/* Si decides descomentar los links de navegación en el futuro, el CSS ya está listo. */}
      <ul className='permalinks'>
        {/* <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#experience">Stack</a></li>
        <li><a href="#portfolio">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
        */}
      </ul>

      <div className='footer__socials'>
        {/* IMPORTANTE: target="_blank" para que no cierren tu web al ver tu insta */}
        <a href="https://www.facebook.com/leandro.s.cba?locale=es_LA" target="_blank" rel="noreferrer">
          <FaFacebook/>
        </a>
        <a href="https://www.instagram.com/leandro.s.cba/" target="_blank" rel="noreferrer">
          <FaInstagram/>
        </a>
        <a href="https://www.linkedin.com/in/leandro-santiago-b10121144/" target="_blank" rel="noreferrer">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/leandros1793" target="_blank" rel="noreferrer">
          <FaGithub/>
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; {new Date().getFullYear()} Leandro Santiago. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer