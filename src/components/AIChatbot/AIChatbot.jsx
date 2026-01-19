import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { RiRobot2Line } from 'react-icons/ri';
import { FiUser, FiX } from 'react-icons/fi';

const AIChatbot = ({ onClose }) => {
  // ... (El estado inicial se mantiene igual)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: '¡Hola! Soy el asistente virtual de Leandro. ¿Te interesa saber sobre sus desarrollos en .NET, su experiencia en E-commerce o soluciones de servidores?',
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

  // --- AQUÍ ESTÁ LA MAGIA: TUS DATOS REALES ---
  const leandroKnowledge = {
    personal: {
      nombre: 'Leandro',
      titulo: 'Técnico en Desarrollo Web y Aplicaciones',
      ubicacion: 'Córdoba, Argentina (Zona horaria GMT-3)',
      contacto: 'leandro.s.cba@gmail.com',
      disponible: 'Sí, disponible para contratos freelance y consultoría.',
    },

    habilidades: {
      // Separamos lo fuerte de lo complementario
      core: ['React', '.NET Blazor', 'C#', 'Shopify Liquid', 'WordPress'],
      infra: ['Gestión de VPS', 'Linux', 'MySQL', 'Optimización de Servidores'],
      tools: ['Git', 'Cursor + AI', 'Figma']
    },

    proyectos: [
      {
        nombre: 'E-commerce Propio (Dueño de Producto)',
        descripcion: 'Desarrollo y gestión integral de una tienda Shopify con modificaciones en Liquid.',
        tecnologias: ['Shopify', 'Liquid', 'Marketing Digital', 'Lógica de Ventas'],
        impacto: 'Gestión completa del ciclo de vida del producto y pasarelas de pago.'
      },
      {
        nombre: 'Rescate de Servidor VPS',
        descripcion: 'Diagnóstico y reparación de un servidor crítico para un cliente académico.',
        tecnologias: ['Linux', 'MySQL', 'Action Scheduler', 'Logs Analysis'],
        impacto: 'Se solucionó un crash recurrente en la base de datos que tiraba el sitio, estabilizando la facturación del cliente.'
      },
      {
        nombre: 'Gestión Corporativa .NET',
        descripcion: 'Desarrollo de módulos para sistema de gestión interno durante pasantías.',
        tecnologias: ['.NET Blazor', 'C#', 'SQL Server'],
        impacto: 'Software robusto para entorno empresarial.'
      }
    ],

    servicios: [
      'Desarrollo Full Stack (.NET / React)',
      'Configuración y Personalización de Shopify/WordPress',
      'Diagnóstico y Solución de Errores en VPS',
      'Optimización de Performance Web'
    ]
  };

  // --- LÓGICA MEJORADA DE RESPUESTA ---
  const getAIResponse = (message) => {
    const lower = message.toLowerCase();
    
    // 1. FILTRO DE PROYECTOS (Actualizado con tus casos reales)
    if (lower.includes('proyecto') || lower.includes('trabajo') || lower.includes('portfolio') || lower.includes('hiciste')) {
      // Rotamos entre los proyectos reales
      const randomProj = leandroKnowledge.proyectos[Math.floor(Math.random() * leandroKnowledge.proyectos.length)];
      return `Te destaco este proyecto: "${randomProj.nombre}".\n\n${randomProj.descripcion}\n🛠 Tecnologías: ${randomProj.tecnologias.join(', ')}.\n\n¿Quieres saber sobre su experiencia técnica específica?`;
    }

    // 2. FILTRO DE HABILIDADES (.NET y Shopify)
    if (lower.includes('habilidad') || lower.includes('stack') || lower.includes('tecnolog') || lower.includes('sabes')) {
      return `Leandro tiene un perfil híbrido muy útil:\n\n💻 Desarrollo Robusto: ${leandroKnowledge.habilidades.core.join(', ')}\nserver Infraestructura: ${leandroKnowledge.habilidades.infra.join(', ')}\n\nPuede levantar un entorno .NET complejo o arreglar un servidor Linux caído.`;
    }

    // 3. FILTRO DE PRECIO/COTIZACIÓN (Estrategia de Ventas)
    if (lower.includes('precio') || lower.includes('costo') || lower.includes('cuanto') || lower.includes('dolar') || lower.includes('cobras')) {
      return `Cada solución es distinta. No es lo mismo configurar un Shopify que desarrollar una App en .NET.\n\nLo mejor es agendar una breve llamada para ver qué necesitas. ¿Te paso su contacto directo?`;
    }

    // 4. FILTRO DE CONTACTO
    if (lower.includes('contacto') || lower.includes('mail') || lower.includes('llamar') || lower.includes('si') || lower.includes('agendar')) {
      return `Genial. Puedes escribirle directo a:\n📧 ${leandroKnowledge.personal.contacto}\n\nSuele responder rápido si mencionas que vienes de su portfolio.`;
    }

    // 5. FILTRO VPS/SERVIDOR (Tu as bajo la manga)
    if (lower.includes('servidor') || lower.includes('vps') || lower.includes('linux') || lower.includes('error')) {
      return `¡Esa es una de sus especialidades! Leandro tiene experiencia diagnosticando errores críticos en VPS y bases de datos MySQL. Si tu sitio se cae, él puede revisarlo.`;
    }

    // DEFAULT
    return 'Entiendo. Puedo contarte sobre su experiencia en .NET, sus tiendas Shopify o cómo repara servidores. ¿Qué te interesa más?';
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

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: getAIResponse(currentInput),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500); // Un poco más rápido, 1.5s a veces es mucho
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // ... (El return del renderizado se mantiene igual, solo asegúrate de que el estilo inline 
  // del contenedor principal tenga 'boxShadow' fuerte para que resalte sobre el fondo)

  return (
    <div style={{
      position: 'fixed',
      bottom: '80px', // SUBIDO UN POCO PARA NO TAPAR EL BOTÓN FLOTANTE SI LO TIENES
      right: '20px',
      width: '320px',
      height: '450px', // UN POCO MÁS ALTO
      backgroundColor: '#ffffff',
      borderRadius: '16px', // BORDES MÁS REDONDOS
      boxShadow: '0 10px 40px rgba(0,0,0,0.2)', // SOMBRA MÁS PROFUNDA
      border: '1px solid rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 1000,
      animation: 'slideUp 0.3s ease-out' // ANIMACIÓN DE ENTRADA
    }}>
      {/* ... Resto del JSX igual ... */}
        {/* Header */}
      <div style={{
        background: 'var(--color-primary)', // USAR TU VARIABLE CSS SI ES POSIBLE, SINO EL GRADIENTE ESTÁ BIEN
        background: 'linear-gradient(135deg, #4db5ff 0%, #2c2c6c 100%)', // Ajustado a tus colores azules probables
        color: '#ffffff',
        padding: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{background:'white', borderRadius:'50%', padding:'5px', display:'flex'}}>
                <RiRobot2Line style={{ width: '18px', height: '18px', color: '#2c2c6c' }} />
            </div>
            <div>
              <h3 style={{ fontWeight: '600', margin: '0', fontSize: '14px', color: '#ffffff' }}>
                Asistente Virtual
              </h3>
              <p style={{ fontSize: '11px', opacity: '0.9', margin: '2px 0 0 0', color: '#e0e0e0' }}>
                En línea ahora
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{
              padding: '6px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
            }}
          >
            <FiX style={{ width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        backgroundColor: '#f5f7fa' // Fondo gris muy suave para diferenciar del input
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
            {/* ... lógica de burbujas igual ... */}
             <div
              style={{
                maxWidth: '240px',
                padding: '12px 16px',
                borderRadius: '12px',
                fontSize: '13.5px', // Letra un pelín más chica para leer mejor
                lineHeight: '1.5',
                whiteSpace: 'pre-line',
                backgroundColor: message.type === 'user' ? '#4db5ff' : '#ffffff', // Tus colores
                color: message.type === 'user' ? '#ffffff' : '#333333',
                borderBottomRightRadius: message.type === 'user' ? '4px' : '12px',
                borderBottomLeftRadius: message.type === 'bot' ? '4px' : '12px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
         <div ref={messagesEndRef} />
      </div>

       {/* Input Area */}
       <div style={{
        padding: '12px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #eee'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe una consulta..."
            style={{
              flex: 1,
              padding: '10px 14px',
              border: '1px solid #e0e0e0',
              borderRadius: '20px', // Input redondeado estilo iMessage/WhatsApp
              fontSize: '14px',
              outline: 'none',
              backgroundColor: '#f9f9f9',
              color: '#333'
            }}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: !inputMessage.trim() || isTyping ? '#ccc' : '#4db5ff', // Tu color primario
              color: '#ffffff',
              border: 'none',
              cursor: !inputMessage.trim() || isTyping ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
          >
            <IoSend style={{ width: '18px', height: '18px', marginLeft:'2px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;