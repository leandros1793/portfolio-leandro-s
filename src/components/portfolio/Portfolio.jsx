import React, { useState } from "react";
import "./portfolio.css";

import IMG1 from "../../assets/fumarmata.png";     // Captura de fumarmata.shop
import IMG2 from "../../assets/acadevor.png";      // Captura de acadevor.com
import IMG3 from "../../assets/impulsa.png";       // Captura de impulsa-5-estrellas
import IMG4 from "../../assets/hoyoenuno.png";     // Captura de hoyoenuno.golf
import IMG5 from "../../assets/xclusive.png";      // Captura de xclusivetravelworld.com
import IMG6 from "../../assets/almaobrador.png";   // Captura de almaobrador.art
import IMG7 from "../../assets/dataextract.png";
import IMG8 from "../../assets/dataview.png";
import IMG9 from "../../assets/dental.png";
import IMG10 from "../../assets/flowbar.png";
import IMG11 from "../../assets/mantenipro.png";
import IMG12 from "../../assets/aileadbot.png";
import IMG13 from "../../assets/pawpetshop.png";
import IMG14 from "../../assets/wyra.png";
import IMG15 from "../../assets/rematesuruguay.png";

const data = [
  // --- TUS PROYECTOS ESTRELLA (Los que más venden) ---
  { 
    id: 12,
    image: IMG12,
    titulo: "AI LeadBot & CRM Orchestrator",
    subtitulo: "Conversational AI & Sales Automations Pipeline",
    tecnologias: "JavaScript / HTML5 / CSS3 / AI / Webhooks",
    category: "interactive",
    github: "https://github.com/leandros1793", 
    demo: "https://portfolio-leandro-s.vercel.app/ai-leadbot-crm",
  },
  { 
    id: 1,
    image: IMG1,
    titulo: "FumarMata.shop (Dueño de Producto)",
    subtitulo: "E-commerce End-to-End",
    tecnologias: "Shopify / Liquid / Estrategia de Ventas",
    category: "ecommerce",
    github: "https://github.com/leandros1793", 
    demo: "https://www.fumarmata.shop/",
  },
  { 
    id: 2,
    image: IMG2,
    titulo: "Acadevor - Infraestructura",
    subtitulo: "Diagnóstico y Solución de Error Crítico en VPS",
    tecnologias: "Linux / MySQL / Optimización Backend",
    category: "backend",
    github: "https://github.com/leandros1793",
    demo: "https://acadevor.com/",
  },
  { 
    id: 3,
    image: IMG3,
    titulo: "Impulsa 5 Estrellas",
    subtitulo: "Sistema de Automatización & SaaS",
    tecnologias: "React / Next.js / Automatización",
    category: "backend",
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
    category: "interactive",
    github: "https://github.com/leandros1793",
    demo: "https://hoyoenuno.golf/",
  },
  { 
    id: 5,
    image: IMG5,
    titulo: "Xclusive Travel World",
    subtitulo: "Sitio Web Corporativo de Turismo",
    tecnologias: "Diseño Web / Optimización SEO",
    category: "ecommerce",
    github: "https://github.com/leandros1793",
    demo: "https://www.xclusivetravelworld.com/",
  },
  { 
    id: 6,
    image: IMG6,
    titulo: "Alma Obrador",
    subtitulo: "Web Gastronómica & Identidad",
    tecnologias: "Diseño UI / Frontend",
    category: "ecommerce",
    github: "https://github.com/leandros1793",
    demo: "https://almaobrador.art/",
  },

  // --- DEMOS & PROPUESTAS WORKANA ---
  { 
    id: 7,
    image: IMG7,
    titulo: "DataExtract",
    subtitulo: "Scraping Automatizado Google Maps + Instagram",
    tecnologias: "JavaScript / Web Scraping / Automatización",
    category: "interactive",
    github: "https://github.com/leandros1793",
    demo: "https://portfolio-leandro-s.vercel.app/dataextract-demo",
  },
  { 
    id: 8,
    image: IMG8,
    titulo: "DataView Dashboard",
    subtitulo: "De Excel a Dashboard Interactivo en Segundos",
    tecnologias: "JavaScript / Chart.js / Excel Parsing",
    category: "interactive",
    github: "https://github.com/leandros1793",
    demo: "https://portfolio-leandro-s.vercel.app/dataview-excel-dashboard",
  },
  { 
    id: 9,
    image: IMG9,
    titulo: "Sonríe Dental",
    subtitulo: "Landing Page para Clínica Dental",
    tecnologias: "HTML / CSS / Diseño UI Médico",
    category: "interactive",
    github: "https://github.com/leandros1793",
    demo: "https://portfolio-leandro-s.vercel.app/dental-landing-demo",
  },
  { 
    id: 10,
    image: IMG10,
    titulo: "Flow Bar",
    subtitulo: "Sistema de Pedidos Digitales para Bares",
    tecnologias: "JavaScript / UX / Tiempo Real",
    category: "backend",
    github: "https://github.com/leandros1793",
    demo: "https://portfolio-leandro-s.vercel.app/flowbar-demo",
  },
  { 
    id: 11,
    image: IMG11,
    titulo: "ManteniPro",
    subtitulo: "Sistema de Gestión de Mantenimiento",
    tecnologias: "JavaScript / Dashboard / Gestión Operativa",
    category: "backend",
    github: "https://github.com/leandros1793",
    demo: "https://portfolio-leandro-s.vercel.app/mantenipro-demo",
  },
  { 
    id: 13,
    image: IMG13,
    titulo: "Paw Pet Shop",
    subtitulo: "E-commerce de Mascotas",
    tecnologias: "Shopify / E-commerce",
    category: "ecommerce",
    github: "https://github.com/leandros1793", 
    demo: "https://pawpetshopcol.myshopify.com/",
  },
  { 
    id: 14,
    image: IMG14,
    titulo: "Tees Cashflow",
    subtitulo: "Tienda Online de Ropa",
    tecnologias: "Shopify / E-commerce",
    category: "ecommerce",
    github: "https://github.com/leandros1793", 
    demo: "https://tees.cashflowmethodology.com/",
  },
  { 
    id: 15,
    image: IMG15,
    titulo: "Remates del Uruguay",
    subtitulo: "Plataforma de Subastas Live",
    tecnologias: "Web App / Subastas en Vivo",
    category: "interactive",
    github: "https://github.com/leandros1793", 
    demo: "https://remates.rematesdeluruguay.com.uy/",
  },
];


const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredData = filter === "all" 
    ? data 
    : data.filter(item => item.category === filter);

  return (
    <section id="portfolio">
      <h5>Portafolio Real</h5>
      <h2>Casos de Éxito y Proyectos</h2>

      {/* Selector de Categorías (Filtros) */}
      <div className="portfolio__filters">
        <button 
          onClick={() => setFilter("all")} 
          className={`portfolio__filter-btn ${filter === "all" ? "active" : ""}`}
        >
          Todos
        </button>
        <button 
          onClick={() => setFilter("ecommerce")} 
          className={`portfolio__filter-btn ${filter === "ecommerce" ? "active" : ""}`}
        >
          E-commerce & Shopify
        </button>
        <button 
          onClick={() => setFilter("backend")} 
          className={`portfolio__filter-btn ${filter === "backend" ? "active" : ""}`}
        >
          Sistemas & Backend
        </button>
        <button 
          onClick={() => setFilter("interactive")} 
          className={`portfolio__filter-btn ${filter === "interactive" ? "active" : ""}`}
        >
          Demos Interactivas
        </button>
      </div>

      <div className="container portfolio__container">
        {filteredData.map(({ id, image, titulo, subtitulo, tecnologias, github, demo }) => {
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
              <h5 style={{marginBottom: '0.8rem', opacity: '0.9', fontSize: '0.95rem', fontWeight: '500'}}>
                {subtitulo}
              </h5>
              
              {/* Badges de Tecnologías */}
              <div className="portfolio__item-techs">
                {tecnologias.split(' / ').map((tech, idx) => (
                  <span key={idx} className="portfolio__item-tech">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="portfolio__item-cta">
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