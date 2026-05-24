import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsMessenger } from 'react-icons/bs';
import { RiWhatsappLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Asegúrate de tener estas variables en tu archivo .env
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing.');
      alert('Error de configuración. Contacta por WhatsApp mientras lo soluciono.');
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        alert('¡Mensaje enviado exitosamente! Te responderé a la brevedad.');
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Hubo un error. Por favor, contáctame por WhatsApp.');
      });
  };

  return (
    <section id="contact">
      <h5>¿Listo para escalar tu negocio?</h5>
      <h2>Hablemos de tu Proyecto</h2>

      <div className="container contact__container">
        {/* --- OPCIONES DE CONTACTO --- */}
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>leandro.s.cba@gmail.com</h5>
            <a href="mailto:leandro.s.cba@gmail.com" target="_blank" rel="noreferrer">
              Enviar correo
            </a>
          </article>

          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+54 351 229 5662</h5>
            <a href="https://wa.me/5493512295662" target="_blank" rel="noreferrer">
              Enviar mensaje rápido
            </a>
          </article>

          <article className="contact__option">
            <BsMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>leandro.s.cba</h5>
            <a href="https://m.me/leandro.s.cba" target="_blank" rel="noreferrer">
              Chat en Facebook
            </a>
          </article>
        </div>

        {/* --- FORMULARIO --- */}
        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name='Nombre' 
            placeholder="Tu Nombre Completo o Empresa" 
            required 
          />
          <input 
            type="email" 
            name="Email" 
            placeholder="Tu Correo Electrónico" 
            required 
          />
          <textarea 
            name="Mensaje" 
            rows="7" 
            placeholder="Cuéntame sobre tu proyecto (Web, E-commerce, Automatización...)" 
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Propuesta
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;