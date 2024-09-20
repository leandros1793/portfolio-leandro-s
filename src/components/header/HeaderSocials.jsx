import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/leandro-santiago-b10121144/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/leandros1793" target='_blank'><BsGithub/></a>
      <a href="https://www.instagram.com/leandro.s.cba/" target='_blank'><FaInstagram/></a>
      
    </div>
  )
}

export default HeaderSocials
