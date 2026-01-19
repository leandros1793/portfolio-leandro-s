import React from "react";
import "./services.css";
import { FiCheck } from "react-icons/fi";


const Services = () => {
  return (
    <section id="services">
      <h5>¿Qué soluciones ofrezco?</h5>
      <h2>Mis Servicios</h2>

      <div className="container services__container">
        
        {/* --- SERVICIO 1: DESARROLLO A MEDIDA --- */}
        <article className="service">
          <div className="service__head">
            <h3>Desarrollo Web & Apps</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>Desarrollo de aplicaciones web SPA rápidas y escalables con <strong>React.js</strong> y Angular.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Sistemas de gestión empresarial robustos utilizando <strong>.NET (C#)</strong> y Blazor.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Diseño de interfaces (UI/UX) modernas, responsivas y centradas en la conversión.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Integración de APIs RESTful y bases de datos SQL/NoSQL.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Mantenimiento y refactorización de código legacy.</p>
            </li>
          </ul>
        </article>

        {/* --- SERVICIO 2: E-COMMERCE (Tu especialidad) --- */}
        <article className="service">
          <div className="service__head">
            <h3>E-commerce Expert</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>Creación de tiendas <strong>Shopify</strong> de alto rendimiento (configuración, apps y diseño).</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Desarrollo y personalización de temas con <strong>Liquid</strong> y CSS avanzado.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Implementación de tiendas en <strong>WordPress + WooCommerce</strong>.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Configuración de pasarelas de pago, envíos y automatización de correos.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Optimización de la tasa de conversión (CRO) basada en experiencia real.</p>
            </li>
          </ul>
        </article>

        {/* --- SERVICIO 3: INFRAESTRUCTURA (El bombero) --- */}
        <article className="service">
          <div className="service__head">
            <h3>Soporte & Servidores</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>Diagnóstico y reparación de errores críticos en servidores <strong>VPS (Linux)</strong>.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Optimización de bases de datos <strong>MySQL</strong> y solución de cuellos de botella.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Mejora de velocidad de carga (Core Web Vitals) y rendimiento del servidor.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Migración de sitios web y configuración de entornos de producción.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Resolución de pantallas blancas (WSOD) y conflictos de plugins en WordPress.</p>
            </li>
          </ul>
        </article>
      
      </div>
    </section>
  );
};

export default Services;