import React from 'react';
import './blog.css'; // Importar el CSS
import { NavLink } from 'react-router-dom'



const Blog = () => {
  

  const posts = [
    {
      title: 'Triunfo de Talleres sobre Gimnasia: ¿Quién ganará la Superliga?',
      date: '10 de diciembre de 2024',
      content: `En un partido vibrante, Talleres de Córdoba logró un importante triunfo frente a Gimnasia y Esgrima de La Plata, lo que le permite mantenerse en la pelea por el título de la Superliga Argentina 2024. Este triunfo no solo reafirma la gran temporada del equipo cordobés, sino que también mantiene sus chances de clasificar a competencias internacionales...`,
    },
    {
      title: 'Innovación en el Futuro del Fútbol: La Tecnología en el VAR',
      date: '12 de diciembre de 2024',
      content: `La implementación del VAR (Asistente Arbitral de Video) en el fútbol ha revolucionado la forma en que se toman decisiones en los partidos...`,
    },
    {
      title: 'La Apuesta por la Sustentabilidad: El Fútbol y el Medio Ambiente',
      date: '15 de diciembre de 2024',
      content: `El fútbol no solo está cambiando en el campo, sino también fuera de él, con una creciente apuesta por la sustentabilidad...`,
    },
  ];

  return (
    <div className="blog">
      <div className="header-links">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/ecommerce">Ecommerce</NavLink>
          <NavLink to="/#">Inicio</NavLink>
        </div>
      <h1>Blog</h1>
      
      {/* Anuncio de Google AdSense */}
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-2652689635868175"
           data-ad-slot="xxxxxx" // Reemplaza con tu ID de espacio publicitario
           data-ad-format="auto"></ins>

      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
