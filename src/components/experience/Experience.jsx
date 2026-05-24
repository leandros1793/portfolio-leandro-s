import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>¿Qué tecnologías domino?</h5>
      <h2>Mi Stack Técnico</h2>

      <div className='container experience__container'>
        
        {/* --- FRONTEND --- */}
        <div className='experience__frontend'>
          <h3>Desarrollo Frontend</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript (ES6+)</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Experiencia</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML5 / CSS3</h4>
                <small className='text-light'>Avanzado</small>
              </div>
            </article>
          </div>
        </div>

        {/* --- BACKEND (.NET & NODE) --- */}
        <div className='experience__backend'>
          <h3>Backend & Arquitectura</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C# / .NET Core</h4>
                <small className='text-light'>Arquitectura Sólida</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>APIs REST</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL Server / MySQL</h4>
                <small className='text-light'>Base de Datos</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Linux / VPS</h4>
                <small className='text-light'>Gestión de Servidores</small>
              </div>
            </article>
          </div>
        </div>

        {/* --- E-COMMERCE & CMS (ESTO VENDE) --- */}
        <div className='experience__backend'>
          <h3>E-commerce & CMS</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Shopify (Liquid)</h4>
                <small className='text-light'>Desarrollo de Themes</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>WordPress</h4>
                <small className='text-light'>Personalización Avanzada</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>WooCommerce</h4>
                <small className='text-light'>Tiendas Online</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience