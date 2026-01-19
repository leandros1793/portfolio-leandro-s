import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/leandro-santiago-b10121144/" target='_blank' rel="noreferrer">
        <BsLinkedin/>
      </a>
      <a href="https://github.com/leandros1793" target='_blank' rel="noreferrer">
        <BsGithub/>
      </a>
      <a href="https://www.instagram.com/leandro.s.cba/" target='_blank' rel="noreferrer">
        <FaInstagram/>
      </a>
    </div>
  )
}

export default HeaderSocials