import React from "react";
import "./portfolio.css";

// IMPORTANTE: Tienes que sacar capturas de pantalla nuevas de estas webs reales
// y guardarlas en tu carpeta assets con estos nombres (o cambiarlos aquí)
import IMG1 from "../../assets/fumarmata.png";     // Captura de fumarmata.shop
import IMG2 from "../../assets/acadevor.png";      // Captura de acadevor.com
import IMG3 from "../../assets/impulsa.png";       // Captura de impulsa-5-estrellas
import IMG4 from "../../assets/hoyoenuno.png";     // Captura de hoyoenuno.golf
import IMG5 from "../../assets/xclusive.png";      // Captura de xclusivetravelworld.com
import IMG6 from "../../assets/almaobrador.png";   // Captura de almaobrador.art

const data = [
  // --- TUS PROYECTOS ESTRELLA (Los que más venden) ---
  { 
    id: 1,
    image: IMG1,
    titulo: "FumarMata.shop (Dueño de Producto)",
    subtitulo: "E-commerce End-to-End",
    tecnologias: "Shopify / Liquid / Estrategia de Ventas",
    // Si es tu proyecto propio, quizás sí tengas repo, si no, pon tu perfil
    github: "https://github.com/leandros1793", 
    demo: "https://www.fumarmata.shop/",
  },
  { 
    id: 2,
    image: IMG2,
    titulo: "Acadevor - Infraestructura",
    subtitulo: "Diagnóstico y Solución de Error Crítico en VPS",
    tecnologias: "Linux / MySQL / Optimización Backend",
    github: "https://github.com/leandros1793",
    demo: "https://acadevor.com/",
    // Nota: Aquí el cliente valorará que arreglaste el bug del servidor
  },
  { 
    id: 3,
    image: IMG3,
    titulo: "Impulsa 5 Estrellas",
    subtitulo: "Sistema de Automatización & SaaS",
    tecnologias: "React / Next.js / Automatización",
    github: "https://github.com/leandros1793",
    demo: "https://impulsa-5-estrellas.vercel.app/",
  },

  // --- CLIENTES & VERSATILIDAD ---
  { 
    id: 4,
    image: IMG4,
    titulo: "Hoyo en Uno Golf",
    subtitulo: "Plataforma Deportiva",
    tecnologias: "Desarrollo Web / UX Deportivo",
    github: "https://github.com/leandros1793",
    demo: "https://hoyoenuno.golf/",
  },
  { 
    id: 5,
    image: IMG5,
    titulo: "Xclusive Travel World",
    subtitulo: "Sitio Web Corporativo de Turismo",
    tecnologias: "Diseño Web / Optimización SEO",
    github: "https://github.com/leandros1793",
    demo: "https://www.xclusivetravelworld.com/",
  },
  { 
    id: 6,
    image: IMG6,
    titulo: "Alma Obrador",
    subtitulo: "Web Gastronómica & Identidad",
    tecnologias: "Diseño UI / Frontend",
    github: "https://github.com/leandros1793",
    demo: "https://almaobrador.art/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portafolio Real</h5>
      <h2>Casos de Éxito y Proyectos</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, titulo, subtitulo, tecnologias, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img 
                  src={image} 
                  alt={titulo} 
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3>{titulo}</h3>
              <h5 style={{marginBottom: '0.5rem', opacity: '0.8', fontSize: '0.95rem', fontWeight: '500'}}>
                {subtitulo}
              </h5>
              <small className="text-light" style={{display:'block', marginBottom: '1.5rem', fontSize: '0.8rem'}}>
                 Stack: {tecnologias}
              </small>

              <div className="portfolio__item-cta">
                {/* Botón Github genérico para clientes (ya que el código suele ser privado) */}
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Visitar Web
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;