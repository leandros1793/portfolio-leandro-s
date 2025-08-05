import React, { useEffect } from 'react'; // Asegúrate de importar useEffect
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {


  return (
    <header id="home">
      <div className="container header__container">
        <h2>BIENVENIDOS AL PORTFOLIO DE</h2>
        <h1>Leandro Santiago</h1>
        <h3 className="text-light">Fullstack Developer</h3>

        <CTA />



        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
