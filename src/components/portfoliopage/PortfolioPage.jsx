// src/components/PortfolioPage.jsx
import React from 'react';
import About from '../about/About'
import Experience from '../experience/Experience';
import Services from '../Services/Services';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import Header from '../header/Header';

const PortfolioPage = () => {
  return (
    <>
      <div className="aurora-orb aurora-1"></div>
      <div className="aurora-orb aurora-2"></div>
      <div className="aurora-orb aurora-3"></div>
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default PortfolioPage;
