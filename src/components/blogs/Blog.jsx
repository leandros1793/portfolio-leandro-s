import React, { useState } from 'react';
import './blog.css';
import { FiClock, FiTag, FiX, FiArrowRight } from 'react-icons/fi';

const postsData = [
  {
    id: 201,
    title: 'Cómo rescaté un servidor VPS crítico en producción',
    date: '22 de Agosto de 2025',
    category: 'DevOps & Servidores',
    readTime: '5 min de lectura',
    brief: 'Diagnóstico y resolución de un crash recurrente en la base de datos MySQL de una academia online. Identificación de cuellos de botella mediante análisis de logs de sistema.',
    content: `El cliente se comunicó de urgencia: su academia en línea (acadevor.com) experimentaba caídas constantes en las horas de mayor afluencia. Tras conectarme por SSH y ejecutar "htop", detecté que la CPU del VPS estaba al 100% de uso, principalmente consumida por procesos de MySQL.

    Aquí detallo el proceso de rescate técnico implementado:

    1. ANÁLISIS DE LOGS
    El primer paso crítico fue investigar los archivos en /var/log/mysql/error.log. Encontré múltiples registros que apuntaban a "InnoDB: page_cleaner: 1000ms intended loop took...". Esto indicaba un cuello de botella grave escribiendo en el disco SSD, provocando un bloqueo de transacciones concurrentes provenientes de WordPress.

    2. DIAGNÓSTICO
    Descubrí que un plugin de colas de tareas (Action Scheduler) estaba saturando la base de datos con miles de eventos de seguimiento de usuarios sin limpiar los registros antiguos. Esto causaba un desbordamiento en el búfer de almacenamiento InnoDB.

    3. SOLUCIÓN IMPLEMENTADA
    - Optimización de variables en el archivo my.cnf, incrementando el "innodb_buffer_pool_size" al 70% de la RAM total disponible en el VPS.
    - Creación de índices específicos en las tablas "wp_actionscheduler_actions" para acelerar las consultas de estados pendientes y evitar el bloqueo completo de tablas.
    - Programación de una tarea Cron que purga automáticamente los registros completados de más de 3 días.
    - Configuración de alertas tempranas mediante un script Bash conectado a Discord que me notifica si la memoria libre cae por debajo del 15%.

    RESULTADO: El servidor se estabilizó de inmediato, reduciendo el tiempo de carga promedio del sitio de 4.8 segundos a 1.2 segundos y asegurando la continuidad del negocio.`
  },
  {
    id: 202,
    title: 'Shopify Liquid vs Plantillas: El impacto real en las ventas',
    date: '10 de Septiembre de 2025',
    category: 'E-commerce & Shopify',
    readTime: '4 min de lectura',
    brief: 'Por qué programar secciones nativas en Liquid supera a los page builders tradicionales. Velocidad de carga, SEO y flexibilidad de desarrollo de extremo a extremo.',
    content: `Al iniciar en Shopify, muchos eligen Page Builders (PageFly, Shogun) para arrastrar y soltar componentes. No obstante, esto inyecta código redundante, CSS gigantesco y librerías externas que degradan radicalmente la velocidad del sitio.

    En tiendas con alta inversión publicitaria como fumarmata.shop, cada milisegundo de demora cuesta dinero. Un retraso de 1 segundo en pantallas móviles puede disminuir las conversiones en un 7%.

    BENEFICIOS DE PROGRAMAR NATIVAMENTE EN LIQUID:
    - VELOCIDAD EXTREMA: El código Liquid es interpretado y renderizado del lado del servidor de Shopify. El cliente recibe HTML puro y ligero, sin depender de scripts externos.
    - INDEPENDENCIA DE APPS: Logramos funcionalidades complejas como un minicart dinámico o selectores de productos relacionados a nivel de plantilla, eliminando suscripciones mensuales a apps que ralentizan la carga.
    - ESTRUCTURA SEO LIMPIA: Marcados de datos estructurados enriquecidos integrados a mano, permitiendo una jerarquía perfecta para los motores de búsqueda de Google.

    En este proyecto, reescribí el "Mini-cart" y las secciones del Hero. Pasamos de un puntaje de velocidad móvil en Google Lighthouse de 34 a 82. Esto derivó en un incremento directo del 1.4% en la tasa de conversión en las primeras dos semanas.`
  },
  {
    id: 203,
    title: 'Blazor vs React: ¿Cuál elegir para sistemas internos?',
    date: '04 de Noviembre de 2025',
    category: 'Desarrollo Full-Stack',
    readTime: '6 min de lectura',
    brief: 'Comparación de arquitecturas para paneles de gestión y sistemas ERP internos. Ventajas de escribir C# de extremo a extremo frente a la flexibilidad de React.',
    content: `Durante mi experiencia construyendo sistemas internos para empresas, me topé constantemente con la decisión arquitectónica: ¿Hacemos el panel administrativo con React consumiendo una API, o implementamos una solución con .NET Blazor?

    Analicemos las ventajas de ambos enfoques para sistemas internos corporativos:

    VENTAJAS DE .NET BLAZOR (WebAssembly / Server):
    - CÓDIGO ÚNICO (C#): Puedes compartir clases y lógica de validación entre el servidor y el cliente. No necesitas reprogramar las reglas de negocio en Javascript.
    - INTEGRACIÓN CON ENTITY FRAMEWORK: Consultas de bases de datos ultra rápidas y mapeo directo.
    - SEGURIDAD INTEGRADA: En Blazor Server, el estado del cliente se gestiona en la memoria del servidor y solo se envían cambios a la interfaz mediante WebSockets (SignalR), eliminando la necesidad de exponer endpoints públicos vulnerables.

    VENTAJAS DE REACT:
    - ECOSISTEMA Y FLEXIBILIDAD: Miles de librerías de interfaz gráfica (UI) altamente probadas.
    - SERVIDOR ESTÁTICO (SPA): Los archivos pueden distribuirse en una CDN (como Cloudflare), lo que minimiza el consumo de recursos de computación de tu servidor backend.

    MI RECOMENDACIÓN: Para sistemas empresariales internos complejos con formularios pesados y gran lógica de datos, Blazor acelera los tiempos de entrega un 30% gracias a la unificación de lenguaje en C#. Para plataformas de cara al cliente general donde la velocidad de renderizado inicial es crítica, React combinado con Next.js sigue siendo el líder indiscutido.`
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="blog-page">
      <div className="container blog-container">
        <header className="blog-header">
          <h5>Artículos de Especialidad</h5>
          <h1>Blog Técnico y Casos de Éxito</h1>
          <p className="blog-desc">
            Comparto mis análisis, soluciones a problemas críticos de infraestructura y reflexiones sobre arquitectura de software basadas en mi experiencia diaria.
          </p>
        </header>

        {/* Listado de Posts */}
        <div className="blog-grid">
          {postsData.map((post) => (
            <article key={post.id} className="blog-card" onClick={() => setSelectedPost(post)}>
              <div className="blog-card-meta">
                <span className="blog-meta-item">
                  <FiTag className="meta-icon" /> {post.category}
                </span>
                <span className="blog-meta-item">
                  <FiClock className="meta-icon" /> {post.readTime}
                </span>
              </div>

              <h3>{post.title}</h3>
              <p className="blog-card-brief">{post.brief}</p>
              
              <div className="blog-card-footer">
                <span className="blog-date">{post.date}</span>
                <span className="read-more-link">
                  Leer artículo <FiArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL DETALLE DEL ARTÍCULO */}
      {selectedPost && (
        <div className="blog-modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-blog-btn" onClick={() => setSelectedPost(null)}>
              <FiX size={24} />
            </button>

            <header className="blog-modal-header">
              <div className="blog-modal-meta">
                <span className="blog-meta-badge">{selectedPost.category}</span>
                <span className="blog-meta-text"><FiClock /> {selectedPost.readTime}</span>
                <span className="blog-meta-text">{selectedPost.date}</span>
              </div>
              <h2>{selectedPost.title}</h2>
            </header>

            <div className="blog-modal-content">
              {selectedPost.content.split('\n\n').map((paragraph, index) => {
                // Si es un título de sección dentro del artículo (ej: 1. ANÁLISIS DE LOGS)
                if (paragraph.trim().match(/^[0-9A-ZÁÉÍÓÚ\s.:-]+$/)) {
                  return <h4 key={index} className="content-section-title">{paragraph}</h4>;
                }
                
                // Párrafo estándar
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
            
            <div className="blog-modal-footer">
              <button className="btn btn-primary" onClick={() => setSelectedPost(null)}>
                Cerrar Artículo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
