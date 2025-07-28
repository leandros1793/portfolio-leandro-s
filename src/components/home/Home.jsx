// src/components/home/Home.jsx

import React from 'react';
import './Home.module.css'; // Estilos actualizados

const Home = () => {
  return (
    <div className="home">

      {/* Logo */}
      <header className="header-logo">
        <img src="/path/to/your/logo.png" alt="Logo Máquina" className="logo" />
      </header>

      {/* Toolbar - Menu de Navegación */}
      <nav className="toolbar">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/ecommerce">Ecommerce</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul>
      </nav>

      {/* Imagen Full-width con descripción */}
      <section className="hero-section">
        <img src="/path/to/your/hero-image.jpg" alt="Imagen principal" className="hero-image" />
        <div className="description">
          <h1>Bienvenido a Máquina</h1>
          <p>Máquina es un estudio de fotografía, video y marketing para startups. Ofrecemos soluciones creativas con una estética retro-futurista.</p>
          <a href="/portfolio" className="cta-btn">Ver Portfolio</a>
        </div>
      </section>

      {/* Sección de Blogs */}
      <section className="section-container">
        <h2>Últimos Blogs</h2>
        <div className="cards-container">
          <div className="card-item">
            <div className="card-item-image">
              <img src="/path/to/blog-image1.jpg" alt="Blog 1" />
            </div>
            <h3>Título del Blog 1</h3>
            <p>Descripción corta del blog 1.</p>
            <div className="card-item-cta">
              <a href="/blog" className="card-btn">Leer más</a>
            </div>
          </div>
          {/* Añadir más tarjetas de blogs */}
        </div>
      </section>

      {/* Sección de Productos Destacados */}
      <section className="section-container">
        <h2>Productos Destacados</h2>
        <div className="cards-container">
          <div className="card-item">
            <div className="card-item-image">
              <img src="/path/to/product-image1.jpg" alt="Producto 1" />
            </div>
            <h3>Producto 1</h3>
            <p>Descripción corta del producto 1.</p>
            <div className="card-item-cta">
              <a href="/ecommerce" className="card-btn">Ver Producto</a>
            </div>
          </div>
          {/* Añadir más tarjetas de productos */}
        </div>
      </section>
    </div>
  );
};

export default Home;
