import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from "react-icons/bs"
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Que Habilidades tengo?</h5>
      <h2>Mis Conocimientos</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Experiencia</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill  classname="experience__details-icon" />
             <div> <h4>HTML</h4>
        
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div><h4>CSS</h4>
        
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
             <div>
             <h4>Javascript</h4>
            
             </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>ReactJs</h4>
        
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
             <div>
             <h4>Angular</h4>
            
             </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
             <div>
             <h4>Wordpress</h4>
            
             </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
             <div>
             <h4>Redux</h4>
            
             </div>
             </article>
             <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
             <div>
             <h4>Tailwind</h4>
            
             </div>
            </article>
           

          </div>
        </div>
        <div className='experience__backend'>
        <h3>Backend Experiencia</h3>
        <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>Node Js</h4>
            
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>Mongo Db</h4>
              
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>Java</h4>
              
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>Python</h4>
              
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>Mysql</h4>
              
              </div>
            </article>
            

          </div>


          
      </div>

      <div className='experience__backend'>
        <h3>Aplicaciones Moviles</h3>
        <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>Android Studio</h4>
            
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>Java POO</h4>
              
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>Kotlin</h4>
              
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>XML</h4>
              
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill classname="experience__details-icon"/>
              <div>
              <h4>Gradle</h4>
              
              </div>
            </article>
            

          </div>


          
      </div>
     

      </div>
    </section>
  )
}

export default Experience
