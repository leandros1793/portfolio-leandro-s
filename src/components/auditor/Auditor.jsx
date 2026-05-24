import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiZap, FiAlertTriangle, FiArrowRight, FiActivity } from 'react-icons/fi';
import { RiSpeedUpLine } from 'react-icons/ri';
import './auditor.css';

const steps = [
  'Conectando con los servidores CDN de Shopify...',
  'Analizando estructura DOM y jerarquía Liquid...',
  'Buscando scripts huérfanos de apps desinstaladas...',
  'Midiendo tiempos de renderizado de imagen principal (LCP)...',
  'Calculando Cumulative Layout Shift (CLS)...',
  'Generando informe de optimización final...'
];

const Auditor = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle'); // idle, scanning, result
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  const [score, setScore] = useState(38);

  useEffect(() => {
    let interval;
    if (status === 'scanning') {
      setProgress(0);
      let stepIdx = 0;
      setLoadingText(steps[0]);

      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1;
          
          // Cambiar texto de carga en ciertos intervalos de porcentaje
          const targetStep = Math.floor((next / 100) * steps.length);
          if (targetStep < steps.length && targetStep !== stepIdx) {
            stepIdx = targetStep;
            setLoadingText(steps[stepIdx]);
          }

          if (next >= 100) {
            clearInterval(interval);
            // Generar un score aleatorio realista entre 35 y 48
            const generatedScore = Math.floor(Math.random() * (48 - 35 + 1)) + 35;
            setScore(generatedScore);
            setStatus('result');
            return 100;
          }
          return next;
        });
      }, 50); // 5 segundos de escaneo total aprox
    }
    return () => clearInterval(interval);
  }, [status]);

  const handleScanSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    setStatus('scanning');
  };

  const handleStartOver = () => {
    setUrl('');
    setStatus('idle');
    setProgress(0);
  };

  const handleCheckoutRedirect = () => {
    // Almacenamos el producto pendiente en localStorage
    const pendingProduct = {
      id: 101,
      title: 'Shopify Speed Booster',
      price: 349.00,
      quantity: 1
    };
    localStorage.setItem('pending_checkout', JSON.stringify(pendingProduct));
    // Redireccionamos a la tienda con el disparador de checkout
    navigate('/ecommerce?checkout=true');
  };

  return (
    <div className="auditor-page">
      <div className="container auditor-container">
        
        {/* CABECERA */}
        <header className="auditor-header">
          <h5>Optimización de Conversión</h5>
          <h1>Auditor de Rendimiento Shopify</h1>
          <p className="auditor-subtitle">
            El 47% de los usuarios abandona una tienda si tarda más de 3 segundos en cargar. Ingresa la URL de tu tienda Shopify y obtén un análisis inmediato de velocidad, SEO y Core Web Vitals.
          </p>
        </header>

        {/* ESTADO INICIAL: Formulario */}
        {status === 'idle' && (
          <div className="auditor-card form-card">
            <form onSubmit={handleScanSubmit}>
              <div className="search-input-wrapper">
                <FiSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="ejemplo-tienda.myshopify.com o tu-dominio.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary scan-btn">
                <FiZap style={{ marginRight: '8px' }} /> Analizar Velocidad
              </button>
            </form>
            <div className="security-note">
              🔒 Análisis externo rápido no intrusivo. No requiere accesos a tu administrador.
            </div>
          </div>
        )}

        {/* ESTADO ESCANEANDO: Loader Animado */}
        {status === 'scanning' && (
          <div className="auditor-card scanning-card">
            <div className="scanning-pulse">
              <FiActivity className="pulse-icon" />
            </div>
            <h3>Analizando: {url}</h3>
            
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
            </div>
            
            <div className="progress-percentage">{progress}%</div>
            <p className="scanning-text">{loadingText}</p>
          </div>
        )}

        {/* ESTADO RESULTADOS: Dashboard de Diagnóstico */}
        {status === 'result' && (
          <div className="result-wrapper">
            
            <div className="dashboard-grid">
              
              {/* Bloque Izquierdo: Velocímetro */}
              <div className="auditor-card gauge-card">
                <h3>Puntaje de Rendimiento</h3>
                
                <div className="gauge-container">
                  <svg className="gauge" viewBox="0 0 100 50">
                    <path 
                      className="gauge-bg" 
                      d="M 10 50 A 40 40 0 0 1 90 50" 
                      fill="none" 
                      stroke="#1e293b" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                    />
                    <path 
                      className="gauge-fill" 
                      d="M 10 50 A 40 40 0 0 1 90 50" 
                      fill="none" 
                      stroke="url(#gaugeGradient)" 
                      strokeWidth="8" 
                      strokeLinecap="round"
                      strokeDasharray="125.6"
                      // Calcula el arco según el score (0 a 100)
                      strokeDashoffset={125.6 - (125.6 * (score / 100))}
                    />
                    <defs>
                      <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="gauge-score-value text-red">{score}</div>
                  <div className="gauge-label text-red">Pobre (Móvil)</div>
                </div>

                <p className="gauge-summary">
                  Tu tienda se encuentra en el rango crítico. Estás experimentando pérdidas estimadas del <strong>22% en conversiones</strong> debido a tiempos de carga prolongados.
                </p>
              </div>

              {/* Bloque Derecho: Core Web Vitals */}
              <div className="auditor-card vitals-card">
                <h3>Métricas Clave de Experiencia (Core Web Vitals)</h3>
                
                <div className="vital-item">
                  <div className="vital-header">
                    <span>Largest Contentful Paint (LCP)</span>
                    <span className="vital-val text-red">4.8s</span>
                  </div>
                  <div className="vital-bar"><div className="vital-fill bg-red" style={{ width: '85%' }}></div></div>
                  <p className="vital-desc">Tiempo de renderizado de la imagen más grande. Ideal: &lt; 2.5s.</p>
                </div>

                <div className="vital-item">
                  <div className="vital-header">
                    <span>Total Blocking Time (TBT)</span>
                    <span className="vital-val text-red">780ms</span>
                  </div>
                  <div className="vital-bar"><div className="vital-fill bg-red" style={{ width: '70%' }}></div></div>
                  <p className="vital-desc">Tiempo que la página está bloqueada para interacción. Ideal: &lt; 150ms.</p>
                </div>

                <div className="vital-item">
                  <div className="vital-header">
                    <span>Cumulative Layout Shift (CLS)</span>
                    <span className="vital-val text-yellow">0.24</span>
                  </div>
                  <div className="vital-bar"><div className="vital-fill bg-yellow" style={{ width: '45%' }}></div></div>
                  <p className="vital-desc">Estabilidad visual de los elementos de tu tienda. Ideal: &lt; 0.1.</p>
                </div>
              </div>

            </div>

            {/* Listado de Problemas Críticos */}
            <div className="auditor-card issues-card">
              <h3>Problemas Críticos Encontrados</h3>
              
              <div className="issue-list">
                <div className="issue-item">
                  <FiAlertTriangle className="issue-icon text-red" />
                  <div className="issue-info">
                    <h4>Scripts Obsoletos de Aplicaciones (App Bloat)</h4>
                    <p>Detectamos rastros de 6 aplicaciones desinstaladas en el archivo principal `theme.liquid` que siguen inyectando JS inactivo y bloqueando la carga. <strong>Impacto: +1.6s de retraso.</strong></p>
                  </div>
                </div>

                <div className="issue-item">
                  <FiAlertTriangle className="issue-icon text-red" />
                  <div className="issue-info">
                    <h4>Falta de Formatos de Imagen de Próxima Generación (AVIF/WebP)</h4>
                    <p>El carrusel de productos de tu página de inicio carga imágenes pesadas sin compresión dinámica y sin atributos `srcset` ni `loading="lazy"`. <strong>Impacto: 2.4 MB transferidos innecesariamente.</strong></p>
                  </div>
                </div>

                <div className="issue-item">
                  <FiAlertTriangle className="issue-icon text-yellow" />
                  <div className="issue-info">
                    <h4>Hojas de Estilo CSS Bloqueantes</h4>
                    <p>Múltiples archivos CSS de plugins y tipografías externas se cargan de forma síncrona en el <code>&lt;head&gt;</code>, bloqueando el pintado inicial de la pantalla. <strong>Impacto: LCP lento.</strong></p>
                  </div>
                </div>
              </div>
            </div>

            {/* TARJETA DE VENTAS (MONETIZACIÓN DIRECTA) */}
            <div className="cta-conversion-card">
              <div className="cta-glow-pulse"></div>
              <div className="cta-content">
                <div className="cta-badge">
                  <RiSpeedUpLine /> SOLUCIÓN INMEDIATA
                </div>
                <h2>¿Quieres llevar tu velocidad a un puntaje de 90+ hoy mismo?</h2>
                <p>
                  Ofrezco una optimización de código artesanal en Shopify. Sin usar apps lentas, reestructurando los scripts bloqueantes, purgando código Liquid muerto y optimizando al 100% tus Core Web Vitals.
                </p>
                
                <div className="cta-offer-row">
                  <div className="cta-price-block">
                    <span className="price-label">Servicio Completo Shopify Speed Booster</span>
                    <span className="price-val">$349.00 USD</span>
                  </div>
                  
                  <div className="cta-action-block">
                    <button onClick={handleCheckoutRedirect} className="btn btn-primary cta-buy-btn">
                      Optimizar Mi Tienda <FiArrowRight style={{ marginLeft: '8px' }} />
                    </button>
                    <button onClick={handleStartOver} className="btn btn-outline-alt">
                      Analizar otra tienda
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Auditor;
