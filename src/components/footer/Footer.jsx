import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
<a href="#" className='footer__logo'>Leandro Santiago.
 Full Stack Developer jr </a>
<ul className='permalinks'>


  {/* <li><a href="#">Inicio</a></li>
  <li><a href="#about">Acerca de</a></li>
  <li><a href="#experience">Experiencia</a></li>
  <li><a href="#services">Servicios</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#testimonials">Testimonios</a></li>
  <li><a href="#contact">Contacto</a></li>
   */}
</ul>
<div className='footer__socials'>
<a href="https://www.facebook.com/leandro.s.cba?locale=es_LA"><FaFacebook/></a>
<a href="https://www.instagram.com/leandro.s.cba/"><FaInstagram/></a>
<a href="https://www.linkedin.com/in/leandro-santiago-b10121144/"><FaLinkedin/></a>
<a href="https://github.com/leandros1793"><FaGithub/></a>
</div>
 <div className='footer__copyright'>


  <small>&copy; Leandro, Santiago. All rights reserved.</small>
 </div>



    </footer>
  )
}

export default Footer
