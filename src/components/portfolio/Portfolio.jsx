import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  { 
    id: 1,
    image: IMG1,
    
    titulo: "Seguimiento de pacientes ",
    github: "https://github.com/leandros1793/citas-react.git",
    demo: "https://dribbble.com/shots/22726698-Seguimiento-de-pacientes-Veterinaria?added_first_shot=true&new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=lesantiago17&utm_content=Seguimiento%20de%20pacientes%20Veterinaria&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=lesantiago17&utm_content=Seguimiento%20de%20pacientes%20Veterinaria&utm_medium=Social_Share",
  },

  {
    id: 2,
    image: IMG2,
    titulo: "Control de gastos presupuesto",
    github: "https://github.com/leandros1793/Control-Gastos.git",
    demo: "https://dribbble.com/shots/22728143-Planificador-de-gastos?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=lesantiago17&utm_content=Planificador%20de%20gastos&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=lesantiago17&utm_content=Planificador%20de%20gastos&utm_medium=Social_Share",
  },

  {
    id: 3,
    image: IMG3,
    titulo: "Convertidor de divisas Java",
    github: "https://github.com/leandros1793/ConvertidorDeDivisas.git",
    demo: "https://dribbble.com/shots/22728335-Conversor-de-monedas?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=lesantiago17&utm_content=Conversor%20de%20monedas&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=lesantiago17&utm_content=Conversor%20de%20monedas&utm_medium=Social_Share",
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
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  {" "}
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
