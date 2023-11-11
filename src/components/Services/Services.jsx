import React from "react";
import "./services.css";
import { FiCheck } from "react-icons/fi";
const Services = () => {
  return (
    <section id="services">
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>Creación de interfaces de usuario atractivas y funcionales que mejoren la experiencia del usuario.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p> Creación de prototipos interactivos y esquemas de diseño para visualizar las ideas antes de la implementación.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Realización de investigaciones para comprender las necesidades y preferencias de los usuarios y aplicar ese conocimiento al diseño.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Evaluación de la usabilidad del diseño a través de pruebas y retroalimentación de usuarios reales.</p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>Adaptación de interfaces para que sean eficaces y atractivas en diferentes dispositivos y resoluciones.</p>
            </li>

          </ul>
        </article>

        {/*final de article*/}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Creación de sitios web a medida que reflejen la identidad y los
                objetivos de tus clientes, utilizando las últimas tecnologías y
                prácticas de diseño.
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                {" "}
                Construcción de interfaces de usuario interactivas y atractivas
                utilizando HTML, CSS y JavaScript para proporcionar una
                experiencia de usuario excepcional.
              </p>
            </li>
     
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Conexión de aplicaciones con servicios de terceros y APIs para
                extender la funcionalidad y la integración de datos.
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Garantía de que el sitio web se vea y funcione correctamente en
                dispositivos móviles y pantallas de diferentes tamaños.
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Desarrollo de tiendas en línea seguras y fáciles de usar con
                sistemas de pago integrados.
              </p>
            </li>
          </ul>
        </article>
        {/* final de article*/}
        <article className="service">
          <div className="service__head">
            <h3>Manejo de Redes</h3>
          </div>
          <ul className="service__list">
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Diseño y ejecución de estrategias de marketing en redes sociales
                para aumentar la visibilidad de tu marca, interactuar con la
                audiencia y generar conversiones.
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Desarrollo de contenido atractivo y relevante para tus redes
                sociales, incluyendo publicaciones, imágenes, videos y otros
                formatos multimedia.
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Planificación y programación de contenido para que tus redes
                estén activas en los momentos más efectivos, incluso cuando
                estás ocupado con otras tareas.
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                {" "}
                Monitoreo constante de las métricas de redes sociales para
                evaluar el rendimiento de tus campañas y realizar ajustes en
                tiempo real.
              </p>
            </li>
            <li>
              <FiCheck className="service__list-icon" />
              <p>
                Creación y administración de campañas publicitarias en
                plataformas como Facebook, Instagram, Twitter y LinkedIn para
                llegar a un público específico.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
