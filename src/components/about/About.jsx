import React from "react";
import "./about.css";
import Yo from "../../assets/Yo.jpg"
import { BiAward } from "react-icons/bi";
import { BiUserCheck } from "react-icons/bi";
import { VscFolder } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
     
      <h2>Acerca de Mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Yo} alt="About Image" className="rounded-full" />
            <div className="hover-indicator">
        <span>¿Me acomodas la imagen?</span>
        <svg
          className="arrow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
      </div>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>3+ de Experiencia </small>
            </article>
            <article className="about__card">
              <BiUserCheck className="about__icon" />
              <h5>Clientes</h5>
              <small>Manejo de redes y E-commerce </small>
            </article>
            <article className="about__card">
              <VscFolder className="about__icon" />
              <h5>Proyectos</h5>
              <small>+ de 15 Proyectos </small>
            </article>
          </div>
          <p>
            ¡Hola! Soy Leandro, un apasionado desarrollador web con amplias
            habilidades y experiencia en la creación de sitios web y
            aplicaciones dinámicas. Mi carrera en el mundo de la programación
            comenzó en 2020, y desde entonces he estado dedicando mi tiempo y
            energía a convertir ideas en realidades digitales .Si estás buscando
            un desarrollador web altamente competente y motivado para tu próximo
            proyecto, no dudes en ponerte en contacto conmigo. Estoy emocionado
            por la oportunidad de trabajar contigo y contribuir al éxito de tu
            proyecto. ¡Hablemos de tu visión y cómo puedo ayudarte a hacerla
            realidad!
          </p>
          <a href="#contact" className="btn-btn-primary">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
