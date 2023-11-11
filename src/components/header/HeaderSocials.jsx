import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/leandro-santiago-b10121144/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/leandros1793" target='_blank'><BsGithub/></a>
      <a href="https://dribbble.com/lesantiago17" target='_blank'><BsDribbble/></a>
      
    </div>
  )
}

export default HeaderSocials
