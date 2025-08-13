import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/ReservasMedicas.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/IMG5.png";
import IMG6 from "../../assets/Captura de pantalla (75).png";
import IMG7 from "../../assets/Captura de pantalla 2025-08-13 112941.png";
import IMG8 from "../../assets/Captura de pantalla 2025-08-13 115629.png";
import IMG9 from "../../assets/courierinternacional.png"

const data = [
  { 
    id: 1,
    image: IMG1,
    
    titulo: "Seguimiento de pacientes ",
    github: "https://github.com/leandros1793/citas-react.git",
    demo: "https://citas-react-sooty.vercel.app/",
  },

  {
    id: 2,
    image: IMG2,
    titulo: "Control de gastos presupuesto",
    github: "https://github.com/leandros1793/Control-Gastos.git",
    demo: "https://control-presupuesto-react-sh94.vercel.app/",
  },


  {
    id: 4,
    image: IMG4,
    titulo: "Cotiza Criptomonedas al Instante",
    github: "https://github.com/leandros1793/03-criptos-react-FIN",
    demo: "https://criptos-react-17.vercel.app/",
  },
  { 
    id: 5,
    image: IMG5,
    
    titulo: "CRM-REACT BACKEND UTILIZANDO API ",
    github: "https://github.com/leandros1793/crm-react",
    demo: "https://crm-react-iota.vercel.app/",
  },
  { 
    id: 6,
    image: IMG6,
    
    titulo: "App de quiosco next js, prisma, tailwind",
    github: "https://github.com/leandros1793/quiosco_app_deploy.git",
    demo: "https://quioscoappleandro-production.up.railway.app/",
  },
  { 
    id: 3,
    image: IMG3,
    
    titulo: "Reservas Medicas con Angular, Django y Mysql ",
    github: "https://github.com/leandros1793/ReservasMedicasWeb_2025t",
    demo: "https://reservasmedicasweb2025.vercel.app/inicio",
  },
    { 
    id: 7,
    image: IMG7,
    
    titulo: "Demo de Wordpress landing page pro consumo",
    github: "https://github.com/leandros1793",
    demo: "/propuestasWorkana/propuesta.html",
  },
    { 
    id: 8,
    image: IMG8,
    
    titulo: "Demo de Hotmart SaaS WhatsApp Automation",
    github: "https://github.com/leandros1793",
    demo: "/propuestasWorkana/SaasWhatsappAutomation.html",
  },
    { 
    id: 9,
    image: IMG9,
    
    titulo: "Gestióde Courier Internacional envíos puerta a puerta y administración de casilleros",
    github: "https://github.com/leandros1793",
    demo: "/propuestasWorkana/GestiódeCourierInternacional.html",
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mi Trabajo Reciente</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, titulo, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={titulo} />
              </div>

              <h3> {titulo} </h3>
               <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                Live Demo
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
