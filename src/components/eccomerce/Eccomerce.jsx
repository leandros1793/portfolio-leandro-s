import React from 'react';
import './eccomerce.css'; // Importar el CSS
import { NavLink } from 'react-router-dom';

const Ecommerce = () => {

  const products = [
    {
      title: 'Cámara Profesional Canon EOS 90D',
      description: 'Captura imágenes nítidas y detalles asombrosos con esta cámara profesional de Canon. Ideal para fotógrafos de alta calidad.',
      price: '$1,199.00',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Lente 50mm f/1.8 para Canon',
      description: 'Lente versátil para cámaras Canon que ofrece excelente rendimiento en condiciones de baja luz.',
      price: '$250.00',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Micrófono Profesional Rode NT1-A',
      description: 'Perfecto para grabación de audio de alta calidad, ideal para estudios profesionales y creadores de contenido.',
      price: '$229.00',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="ecommerce">
      <div className="header-links">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/ecommerce">Ecommerce</NavLink>
        <NavLink to="/#">Inicio</NavLink>
      </div>

      <h1>Tienda Online</h1>

      {/* Anuncio de Google AdSense */}
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2652689635868175"
        data-ad-slot="xxxxxx" // Reemplaza con tu ID de espacio publicitario
        data-ad-format="auto"></ins>

      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
            <button className="add-to-cart">Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecommerce;
