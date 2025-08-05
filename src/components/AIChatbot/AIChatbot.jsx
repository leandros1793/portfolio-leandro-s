import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { RiRobot2Line } from 'react-icons/ri';
import { FiUser, FiX } from 'react-icons/fi';

const AIChatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: '¡Hola! Soy el asistente virtual de Leandro. ¿En qué puedo ayudarte? Puedo contarte sobre sus proyectos, experiencia, habilidades, servicios y más.',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // BASE DE CONOCIMIENTOS DE LEANDRO - AQUÍ CARGAS TODA LA INFORMACIÓN
  const leandroKnowledge = {
    // INFORMACIÓN PERSONAL
    personal: {
      nombre: 'Leandro',
      ubicacion: 'Córdoba, Argentina',
      trabajo_remoto: true,
      email: 'leandro.s.cba@gmail.com',
      whatsapp: '+54 3512295662',
      disponible: 'Disponible para proyectos freelance y trabajo remoto'
    },

    // HABILIDADES TÉCNICAS
    habilidades: {
      frontend: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
      backend: ['Node.js', 'Express.js', 'PHP', 'Python'],
      databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
      tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Photoshop'],
      others: ['API REST', 'JSON', 'AJAX', 'Responsive Design', 'SEO']
    },

    // PROYECTOS (AGREGA TUS PROYECTOS REALES AQUÍ)
    proyectos: [
      {
        nombre: 'Sistema de Gestión E-commerce',
        descripcion: 'Plataforma completa de comercio electrónico con panel de administración',
        tecnologias: ['React', 'Node.js', 'MongoDB', 'Express'],
        caracteristicas: ['Carrito de compras', 'Pagos integrados', 'Panel admin', 'Inventario'],
        duracion: '3 meses'
      },
      {
        nombre: 'Dashboard Analítico',
        descripcion: 'Panel de control con métricas y análisis de datos en tiempo real',
        tecnologias: ['React', 'Chart.js', 'API REST', 'CSS3'],
        caracteristicas: ['Gráficos interactivos', 'Filtros avanzados', 'Exportar datos'],
        duracion: '2 meses'
      },
      {
        nombre: 'App de Gestión de Tareas',
        descripcion: 'Aplicación para gestión de proyectos y tareas colaborativas',
        tecnologias: ['Next.js', 'Firebase', 'React', 'Tailwind'],
        caracteristicas: ['Colaboración en tiempo real', 'Notificaciones', 'Drag & Drop'],
        duracion: '2.5 meses'
      }
    ],

    // SERVICIOS QUE OFRECES
    servicios: [
      'Desarrollo de aplicaciones web completas',
      'Diseño y desarrollo de sitios web responsive',
      'Creación de APIs y servicios backend',
      'Integración con bases de datos',
      'Optimización de rendimiento web',
      'Mantenimiento y actualización de sitios existentes',
      'Consultoría técnica y arquitectura de software',
      'Migración de sitios web legacy'
    ],

    // EXPERIENCIA
    experiencia: {
      años: '3+ años',
      especialidad: 'Desarrollo Full Stack',
      industrias: ['E-commerce', 'Fintech', 'Educación', 'Salud', 'Startups'],
      logros: [
        'Más de 20 proyectos completados exitosamente',
        'Reducción del 40% en tiempo de carga de aplicaciones',
        'Implementación de sistemas que manejan +10,000 usuarios',
        '98% de satisfacción de clientes'
      ]
    },

    // PROCESO DE TRABAJO
    proceso: [
      '1. Análisis de requerimientos y planificación',
      '2. Diseño de arquitectura y wireframes',
      '3. Desarrollo iterativo con feedback constante',
      '4. Testing y optimización',
      '5. Despliegue y capacitación',
      '6. Soporte y mantenimiento post-lanzamiento'
    ],

    // PRECIOS APROXIMADOS (OPCIONAL)
    precios: {
      landing_page: 'Desde $300 USD',
      web_app: 'Desde $800 USD',
      ecommerce: 'Desde $1200 USD',
      api_custom: 'Desde $500 USD',
      mantenimiento: '$50 USD/hora'
    }
  };

  // FUNCIÓN INTELIGENTE PARA RESPONDER
  const getAIResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // RESPUESTAS SOBRE PROYECTOS
    if (lowerMessage.includes('proyecto') || lowerMessage.includes('trabajo') || lowerMessage.includes('portfolio')) {
      const proyecto = leandroKnowledge.proyectos[Math.floor(Math.random() * leandroKnowledge.proyectos.length)];
      return `Te cuento sobre uno de mis proyectos: "${proyecto.nombre}". ${proyecto.descripcion}. Lo desarrollé usando ${proyecto.tecnologias.join(', ')}. Incluye características como: ${proyecto.caracteristicas.join(', ')}. ¿Te interesa conocer más detalles de algún proyecto específico?`;
    }

    // RESPUESTAS SOBRE HABILIDADES
    if (lowerMessage.includes('habilidad') || lowerMessage.includes('skill') || lowerMessage.includes('tecnolog') || lowerMessage.includes('programar')) {
      return `Mis principales habilidades incluyen:
      
Frontend: ${leandroKnowledge.habilidades.frontend.join(', ')}
Backend: ${leandroKnowledge.habilidades.backend.join(', ')}
Bases de datos: ${leandroKnowledge.habilidades.databases.join(', ')}
Herramientas: ${leandroKnowledge.habilidades.tools.join(', ')}

¿Hay alguna tecnología específica que te interese saber más?`;
    }

    // RESPUESTAS SOBRE EXPERIENCIA
    if (lowerMessage.includes('experiencia') || lowerMessage.includes('años') || lowerMessage.includes('tiempo')) {
      return `Tengo ${leandroKnowledge.experiencia.años} de experiencia en ${leandroKnowledge.experiencia.especialidad}. He trabajado en industrias como: ${leandroKnowledge.experiencia.industrias.join(', ')}. 

Algunos de mis logros:
${leandroKnowledge.experiencia.logros.map(logro => `• ${logro}`).join('\n')}`;
    }

    // RESPUESTAS SOBRE SERVICIOS
    if (lowerMessage.includes('servicio') || lowerMessage.includes('ofrec') || lowerMessage.includes('hac')) {
      return `Ofrezco los siguientes servicios:

${leandroKnowledge.servicios.map(servicio => `• ${servicio}`).join('\n')}

¿Cuál de estos servicios te interesa más?`;
    }

    // RESPUESTAS SOBRE CONTACTO
    if (lowerMessage.includes('contacto') || lowerMessage.includes('comunicar') || lowerMessage.includes('email') || lowerMessage.includes('whatsapp')) {
      return `¡Perfecto! Puedes contactar a Leandro por:

📧 Email: ${leandroKnowledge.personal.email}
📱 WhatsApp: ${leandroKnowledge.personal.whatsapp}
📍 Ubicación: ${leandroKnowledge.personal.ubicacion}

${leandroKnowledge.personal.disponible}. ¡Estará encantado de conversar sobre tu proyecto!`;
    }

    // RESPUESTAS SOBRE PRECIOS
    if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('cuanto') || lowerMessage.includes('presupuesto')) {
      return `Los precios varían según la complejidad del proyecto. Como referencia:

• Landing Page: ${leandroKnowledge.precios.landing_page}
• Aplicación Web: ${leandroKnowledge.precios.web_app}
• E-commerce: ${leandroKnowledge.precios.ecommerce}
• API Personalizada: ${leandroKnowledge.precios.api_custom}
• Mantenimiento: ${leandroKnowledge.precios.mantenimiento}

Para un presupuesto exacto, ¡contacta directamente para discutir tu proyecto específico!`;
    }

    // RESPUESTAS SOBRE PROCESO
    if (lowerMessage.includes('proceso') || lowerMessage.includes('como trabaj') || lowerMessage.includes('metodolog')) {
      return `Mi proceso de trabajo incluye:

${leandroKnowledge.proceso.map(paso => paso).join('\n')}

Este enfoque garantiza resultados de calidad y comunicación constante durante todo el proyecto.`;
    }

    // RESPUESTAS SOBRE UBICACIÓN
    if (lowerMessage.includes('donde') || lowerMessage.includes('ubicacion') || lowerMessage.includes('remoto')) {
      return `Leandro está ubicado en ${leandroKnowledge.personal.ubicacion}, pero trabaja de forma remota con clientes de todo el mundo. ${leandroKnowledge.personal.disponible}.`;
    }

    // SALUDOS
    if (lowerMessage.includes('hola') || lowerMessage.includes('buenas') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return '¡Hola! ¿En qué puedo ayudarte hoy? Puedo contarte sobre los proyectos de Leandro, su experiencia, habilidades técnicas, servicios que ofrece, o responder cualquier pregunta específica que tengas.';
    }

    // RESPUESTA POR DEFECTO
    return 'Interesante pregunta. Puedo ayudarte con información sobre: proyectos, experiencia, habilidades técnicas, servicios, precios, proceso de trabajo, contacto, o cualquier duda específica sobre el trabajo de Leandro. ¿Qué te gustaría saber?';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    // Simular tiempo de respuesta del bot
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: getAIResponse(currentInput),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '320px',
      height: '400px',
      backgroundColor: '#ffffff', // FONDO BLANCO FIJO
      borderRadius: '12px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      border: '1px solid #e5e7eb',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 1000
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(to right, #2563eb, #9333ea)',
        color: '#ffffff', // TEXTO BLANCO FIJO
        padding: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RiRobot2Line style={{ width: '20px', height: '20px', color: '#ffffff' }} />
            <div>
              <h3 style={{ fontWeight: '600', margin: '0', fontSize: '14px', color: '#ffffff' }}>
                Asistente IA de Leandro
              </h3>
              <p style={{ fontSize: '12px', opacity: '0.9', margin: '2px 0 0 0', color: '#ffffff' }}>
                Pregúntame lo que quieras saber
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              padding: '4px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FiX style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        backgroundColor: '#ffffff' // FONDO BLANCO FIJO
      }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            {message.type === 'bot' && (
              <div style={{
                width: '32px',
                height: '32px',
                background: '#dbeafe',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <RiRobot2Line style={{ width: '16px', height: '16px', color: '#2563eb' }} />
              </div>
            )}
            <div
              style={{
                maxWidth: '240px',
                padding: '12px',
                borderRadius: '12px',
                fontSize: '14px',
                lineHeight: '1.4',
                whiteSpace: 'pre-line', // PERMITE SALTOS DE LÍNEA
                backgroundColor: message.type === 'user' ? '#2563eb' : '#f8f9fa',
                color: message.type === 'user' ? '#ffffff' : '#1f2937', // COLORES FIJOS
                borderBottomRightRadius: message.type === 'user' ? '4px' : '12px',
                borderBottomLeftRadius: message.type === 'bot' ? '4px' : '12px'
              }}
            >
              {message.text}
            </div>
            {message.type === 'user' && (
              <div style={{
                width: '32px',
                height: '32px',
                background: '#e5e7eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <FiUser style={{ width: '16px', height: '16px', color: '#6b7280' }} />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-start' }}>
            <div style={{
              width: '32px',
              height: '32px',
              background: '#dbeafe',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <RiRobot2Line style={{ width: '16px', height: '16px', color: '#2563eb' }} />
            </div>
            <div style={{
              background: '#f8f9fa',
              padding: '12px',
              borderRadius: '12px',
              borderBottomLeftRadius: '4px'
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#9ca3af',
                  borderRadius: '50%',
                  animation: 'pulse 1.5s ease-in-out infinite'
                }}></div>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#9ca3af',
                  borderRadius: '50%',
                  animation: 'pulse 1.5s ease-in-out 0.1s infinite'
                }}></div>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#9ca3af',
                  borderRadius: '50%',
                  animation: 'pulse 1.5s ease-in-out 0.2s infinite'
                }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div style={{
        padding: '16px',
        borderTop: '1px solid #e5e7eb',
        backgroundColor: '#ffffff' // FONDO BLANCO FIJO
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe tu pregunta..."
            style={{
              flex: 1,
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
              backgroundColor: '#ffffff',
              color: '#1f2937' // TEXTO NEGRO FIJO
            }}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            style={{
              padding: '8px 12px',
              background: !inputMessage.trim() || isTyping ? '#9ca3af' : '#2563eb',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              cursor: !inputMessage.trim() || isTyping ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
          >
            <IoSend style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;