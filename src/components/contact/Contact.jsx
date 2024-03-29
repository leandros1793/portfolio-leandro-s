import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import {BsMessenger} from 'react-icons/bs'
import {RiWhatsappLine} from 'react-icons/ri'

import { useRef } from 'react';
import emailjs from  'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rz4xyk4', 'template_8yhee6i', form.current, 'Dtjg3jQm3D1WA8VS_')
  e.target.reset()
  
  };

  return (
    <section id="contact">
      <h5>Ponerse en Contacto</h5>
      <h2>Contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>leandro.s.cba@gmail.com</h5>
            <a href="mailto:leandro.s.cba@gmail.com" target="_blank">Enviar Mensaje</a>
          </article>

          <article className="contact__option">
            <BsMessenger  className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>leandro.s.cba</h5>
            <a href="https://m.me/leandro.s.cba" target="_blank">Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine  className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+54 3512295662</h5>
            <a href="https://wa.me/+5493512295662" target="_blank">Enviar Mensaje</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>

<input type="text" name='Nombre' placeholder="Ingrese su nombre completo"  required />
<input type="email" name="Email" placeholder="Ingrese su email"  required />
<textarea name="Mensaje" rows ="7"  placeholder="Ingrese el mensaje" required></textarea>
<button type="submit" className="btn btn-primary">Enviar Mensaje</button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
