import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import { RiRobot2Line } from 'react-icons/ri';
import { FiX } from 'react-icons/fi';

const AIChatbot = ({ onClose }) => {
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
  }, [messages, isTyping]);

  const leandroKnowledge = {
    personal: {
      nombre: 'Leandro',
      titulo: 'Técnico en Desarrollo Web y Aplicaciones',
      ubicacion: 'Córdoba, Argentina (Zona horaria GMT-3)',
      contacto: 'leandro.s.cba@gmail.com',
      disponible: 'Sí, disponible para contratos freelance y consultoría.',
    },

    habilidades: {
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

  const getAIResponse = (message) => {
    const lower = message.toLowerCase();
    
    if (lower.includes('proyecto') || lower.includes('trabajo') || lower.includes('portfolio') || lower.includes('hiciste') || lower.includes('proyectos')) {
      const randomProj = leandroKnowledge.proyectos[Math.floor(Math.random() * leandroKnowledge.proyectos.length)];
      return `Te destaco este caso de éxito: "${randomProj.nombre}".\n\n${randomProj.descripcion}\n🛠 Tecnologías: ${randomProj.tecnologias.join(', ')}.\n\n¿Quieres saber más sobre su experiencia técnica específica?`;
    }

    if (lower.includes('habilidad') || lower.includes('stack') || lower.includes('tecnolog') || lower.includes('sabes')) {
      return `Leandro cuenta con un perfil sólido:\n\n💻 Desarrollo: ${leandroKnowledge.habilidades.core.join(', ')}\n🔧 Servidores/Infra: ${leandroKnowledge.habilidades.infra.join(', ')}\n\nPuede levantar un sistema .NET corporativo, hacer un theme de Shopify en Liquid o solucionar un crash de base de datos MySQL en producción.`;
    }

    if (lower.includes('precio') || lower.includes('costo') || lower.includes('cuanto') || lower.includes('dolar') || lower.includes('cobras')) {
      return `Cada solución técnica es distinta. No es lo mismo configurar un Shopify que desarrollar una App empresarial en .NET Blazor.\n\nTe recomiendo ver la sección "E-commerce Demo" de esta web para ver precios de referencia o agendar una breve llamada para ver qué necesitas. ¿Te paso su correo?`;
    }

    if (lower.includes('contacto') || lower.includes('mail') || lower.includes('llamar') || lower.includes('si') || lower.includes('agendar') || lower.includes('escribir')) {
      return `¡Excelente! Puedes escribirle directamente a:\n📧 ${leandroKnowledge.personal.contacto}\n\nSuele responder con rapidez para debatir nuevos proyectos.`;
    }

    if (lower.includes('servidor') || lower.includes('vps') || lower.includes('linux') || lower.includes('error') || lower.includes('soporte') || lower.includes('cae')) {
      return `¡Esa es una de sus fortalezas! Leandro tiene experiencia diagnosticando errores críticos en VPS y bases de datos MySQL, optimizando el rendimiento mediante logs de sistema. Si tu sitio se cae frecuentemente, él puede resolverlo.`;
    }

    return 'Entiendo perfectamente. Puedo contarte sobre la experiencia de Leandro en .NET, sus desarrollos en Shopify Liquid o cómo repara servidores Linux caídos. ¿Qué tema te interesa más?';
  };

  const processResponse = (userText) => {
    setIsTyping(true);
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        type: 'bot',
        text: getAIResponse(userText),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 400); // 800ms to 1200ms delay for natural typing feel
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    
    processResponse(currentInput);
  };

  const handleChipClick = (chipText) => {
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: chipText,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    processResponse(chipText);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const chips = [
    { text: '🛠️ Stack Técnico', value: 'stack' },
    { text: '🚀 Proyectos', value: 'proyectos' },
    { text: '🔧 Soporte VPS', value: 'servidores' },
    { text: '📧 Contacto', value: 'contacto' }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '80px',
      right: '20px',
      width: '340px',
      height: '480px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(77, 181, 255, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 1000,
      animation: 'slideUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }}>
      {/* Inyección de CSS local para animaciones del chatbot */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .typing-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: #999;
          border-radius: 50%;
          animation: jump 1.2s infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #4db5ff 0%, #2c2c6c 100%)',
        color: '#ffffff',
        padding: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'white', borderRadius: '50%', padding: '6px', display: 'flex' }}>
              <RiRobot2Line style={{ width: '18px', height: '18px', color: '#2c2c6c' }} />
            </div>
            <div>
              <h3 style={{ fontWeight: '600', margin: '0', fontSize: '14px', color: '#ffffff' }}>
                Asistente Virtual
              </h3>
              <p style={{ fontSize: '11px', opacity: '0.9', margin: '2px 0 0 0', color: '#e0e0e0' }}>
                Leandro AI • En línea ahora
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
        backgroundColor: '#f5f7fa'
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
            <div
              style={{
                maxWidth: '250px',
                padding: '10px 14px',
                borderRadius: '12px',
                fontSize: '13px',
                lineHeight: '1.5',
                whiteSpace: 'pre-line',
                backgroundColor: message.type === 'user' ? '#4db5ff' : '#ffffff',
                color: message.type === 'user' ? '#ffffff' : '#333333',
                borderBottomRightRadius: message.type === 'user' ? '2px' : '12px',
                borderBottomLeftRadius: message.type === 'bot' ? '2px' : '12px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                border: message.type === 'bot' ? '1px solid rgba(0,0,0,0.05)' : 'none'
              }}
            >
              {message.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-start' }}>
            <div style={{
              maxWidth: '80px',
              padding: '12px 16px',
              borderRadius: '12px',
              borderBottomLeftRadius: '2px',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips Area */}
      <div style={{
        padding: '8px 12px 4px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f0f0f0',
        display: 'flex',
        gap: '6px',
        flexWrap: 'wrap'
      }}>
        {chips.map((chip, i) => (
          <button
            key={i}
            onClick={() => handleChipClick(chip.value)}
            style={{
              padding: '6px 10px',
              borderRadius: '16px',
              border: '1px solid rgba(77, 181, 255, 0.3)',
              background: '#f8fbfc',
              color: '#1f1f38',
              fontSize: '11px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#4db5ff';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#4db5ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f8fbfc';
              e.currentTarget.style.color = '#1f1f38';
              e.currentTarget.style.borderColor = 'rgba(77, 181, 255, 0.3)';
            }}
          >
            {chip.text}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div style={{
        padding: '8px 12px 12px',
        backgroundColor: '#ffffff'
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
              borderRadius: '20px',
              fontSize: '13px',
              outline: 'none',
              backgroundColor: '#f9f9f9',
              color: '#333'
            }}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: !inputMessage.trim() || isTyping ? '#ccc' : '#4db5ff',
              color: '#ffffff',
              border: 'none',
              cursor: !inputMessage.trim() || isTyping ? 'default' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
          >
            <IoSend style={{ width: '16px', height: '16px', marginLeft: '2px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatbot;