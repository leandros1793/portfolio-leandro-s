import React from "react";
import "./about.css";
import Yo from "../../assets/Yo.jpg";
import { BiAward, BiSupport, BiCodeBlock } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Conoce mi perfil</h5>
      <h2>Sobre Mí</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img 
              src={Yo} 
              alt="Leandro Santiago - Técnico en Desarrollo Web" 
              className="rounded-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>Desarrollo Web & Lógica de Negocio</small>
            </article>

            <article className="about__card">
              <BiCodeBlock className="about__icon" />
              <h5>Stack Técnico</h5>
              {/* AQUÍ EL CAMBIO CLAVE: Node y Python primero */}
              <small>Node.js / Python / React</small>
            </article>

            <article className="about__card">
              <BiSupport className="about__icon" />
              <h5>Soluciones</h5>
              <small>Infraestructura & E-commerce</small>
            </article>
          </div>

          <p>
            No soy solo un programador; soy un <strong>Técnico en Desarrollo Web</strong> con una visión orientada a resultados. 
            Combino la escalabilidad del backend moderno (<strong>Node.js, Python</strong>) con interfaces dinámicas en React y la agilidad de plataformas como Shopify.
          </p>
          <p>
            Mi valor diferencial no es solo escribir código, sino entender el negocio detrás de él. 
            Gracias a mi experiencia en ventas, creo soluciones digitales que no solo funcionan, sino que venden. 
            Desde automatizaciones complejas en Python hasta estabilizar servidores VPS críticos.
          </p>

          <a href="#contact" className="btn btn-primary">
            Hablemos de tu Proyecto
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;