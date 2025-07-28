import React, { useEffect } from 'react'; // Asegúrate de importar useEffect
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  useEffect(() => {
    // Agregar el script de Popunder
    const popunderScript = document.createElement('script');
    popunderScript.src = '//pl25525519.profitablecpmrate.com/6a/ee/fd/6aeefd12ca6809a107db70d1c75422e7.js';
    popunderScript.type = 'text/javascript';
    popunderScript.async = true;

    // Agregar el script al header
    document.querySelector('header').appendChild(popunderScript);

    // Limpiar el script al desmontar el componente
    return () => {
      document.querySelector('header').removeChild(popunderScript);
    };
  }, []);

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
