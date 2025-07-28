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
