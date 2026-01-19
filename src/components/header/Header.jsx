import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hola, soy</h5>
        <h1>Leandro Santiago</h1>
        <h5 className="text-light">Técnico en Desarrollo Web | Node.js, Python & E-commerce</h5>

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