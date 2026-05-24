import React, { useState } from 'react';
import './ecommerce.css';
import { FiShoppingCart, FiPlus, FiMinus, FiTrash2, FiX, FiCheckCircle, FiLoader } from 'react-icons/fi';
import { RiServerLine, RiShoppingBag3Line, RiCodeBoxLine } from 'react-icons/ri';

const productsData = [
  {
    id: 101,
    title: 'VPS Rescue & Linux Setup',
    description: 'Diagnóstico de caídas en servidores, reparación de bases de datos MySQL, optimización de performance y configuración de backups automáticos.',
    price: 199.00,
    icon: <RiServerLine className="product-icon-art" />,
    tecnologias: ['Linux', 'MySQL', 'SSH', 'Cronjobs'],
  },
  {
    id: 102,
    title: 'Shopify Custom Liquid & Integration',
    description: 'Creación de secciones a medida sin apps lentas, customización del checkout, vinculación con pasarelas de pago y lógica de negocio avanzada.',
    price: 299.00,
    icon: <RiShoppingBag3Line className="product-icon-art" />,
    tecnologias: ['Shopify Liquid', 'Javascript', 'Webhooks', 'Stripe'],
  },
  {
    id: 103,
    title: 'Full-Stack Enterprise App',
    description: 'Aplicación web corporativa con base de datos robusta, panel de control administrativo, login seguro y renderizado de alta performance.',
    price: 599.00,
    icon: <RiCodeBoxLine className="product-icon-art" />,
    tecnologias: ['.NET Blazor', 'C#', 'React', 'SQL Server'],
  },
];

const Ecommerce = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1); // 1 = Form, 2 = Loading, 3 = Success
  
  // Checkout Form State
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, amount) => {
    setCart((prev) => 
      prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const getCartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setCheckoutStep(2); // Show simulated processing loader
    setTimeout(() => {
      setCheckoutStep(3); // Success state
      setCart([]); // Clear cart
    }, 2000);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
    setCheckoutStep(1);
    setEmail('');
    setName('');
    setCardNumber('');
  };

  return (
    <div className="ecommerce-page">
      {/* Botón flotante del Carrito */}
      <button className="cart-toggle-btn" onClick={() => setIsCartOpen(true)}>
        <FiShoppingCart size={24} />
        {getCartItemCount() > 0 && <span className="cart-badge">{getCartItemCount()}</span>}
      </button>

      <div className="container ecommerce-container">
        <header className="ecommerce-header">
          <h5>Demo Interactiva</h5>
          <h1>Tienda de Servicios Técnicos</h1>
          <p className="ecommerce-desc">
            Esto es una demostración interactiva en tiempo real. Agrega servicios al carrito, simula el proceso de pago con tarjeta y experimenta la reactividad de la interfaz.
          </p>
        </header>

        {/* Listado de Servicios */}
        <div className="services-grid">
          {productsData.map((product) => (
            <div key={product.id} className="service-card">
              <div className="service-card-header">
                <div className="service-icon-container">
                  {product.icon}
                </div>
                <div className="service-price">${product.price.toFixed(2)}</div>
              </div>
              
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              
              <div className="service-techs">
                {product.tecnologias.map((tech, i) => (
                  <span key={i} className="service-tech-badge">{tech}</span>
                ))}
              </div>

              <button className="btn btn-primary add-btn" onClick={() => addToCart(product)}>
                Agregar al Carrito
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* PANEL LATERAL DEL CARRITO (Drawer) */}
      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-sidebar-header">
          <h2>Tu Carrito</h2>
          <button className="close-cart-btn" onClick={() => setIsCartOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <div className="cart-items-container">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FiShoppingCart size={48} className="empty-icon" />
              <p>Tu carrito está vacío.</p>
              <button className="btn btn-primary" onClick={() => setIsCartOpen(false)}>
                Ver Servicios
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <h4>{item.title}</h4>
                  <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                
                <div className="cart-item-actions">
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                      <FiMinus size={12} />
                    </button>
                    <span className="qty-val">{item.quantity}</span>
                    <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                      <FiPlus size={12} />
                    </button>
                  </div>

                  <button className="delete-item-btn" onClick={() => removeFromCart(item.id)}>
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-sidebar-footer">
            <div className="cart-total-row">
              <span>Total:</span>
              <span className="total-price">${getCartTotal()}</span>
            </div>
            <button className="btn btn-primary checkout-btn" onClick={() => setIsCheckoutOpen(true)}>
              Proceder al Pago
            </button>
          </div>
        )}
      </div>

      {/* SIMULADOR DE CHECKOUT (Modal) */}
      {isCheckoutOpen && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal">
            <button className="close-checkout-btn" onClick={closeCheckout}>
              <FiX size={20} />
            </button>

            {checkoutStep === 1 && (
              <form onSubmit={handleCheckoutSubmit} className="checkout-form">
                <h2>Simulador de Checkout</h2>
                <p>Estás contratando {getCartItemCount()} servicio(s) por un total de <strong>${getCartTotal()} USD</strong>.</p>
                
                <div className="form-input-group">
                  <label>Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Leandro Santiago" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-input-group">
                  <label>Correo Electrónico</label>
                  <input 
                    type="email" 
                    placeholder="cliente@negocio.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </div>

                <div className="form-input-group">
                  <label>Número de Tarjeta (Simulado)</label>
                  <input 
                    type="text" 
                    placeholder="4242 4242 4242 4242" 
                    value={cardNumber} 
                    onChange={(e) => setCardNumber(e.target.value)} 
                    maxLength={19}
                    required 
                  />
                </div>

                <div className="simulated-badge">🔒 Conexión Segura de Pruebas</div>

                <button type="submit" className="btn btn-primary pay-btn">
                  Pagar ${getCartTotal()}
                </button>
              </form>
            )}

            {checkoutStep === 2 && (
              <div className="checkout-loading">
                <FiLoader className="loading-spinner" size={48} />
                <h3>Procesando Pago...</h3>
                <p>Estamos simulando la conexión con Stripe para procesar la transacción.</p>
              </div>
            )}

            {checkoutStep === 3 && (
              <div className="checkout-success">
                <FiCheckCircle className="success-icon" size={64} />
                <h2>¡Pago Simulado Exitoso!</h2>
                <p>La transacción de prueba se completó correctamente.</p>
                <p className="success-detail">
                  En un entorno de producción, este formulario habría conectado de forma segura con Stripe, registrando el servicio en tu panel administrativo de Django.
                </p>
                <button className="btn btn-primary" onClick={closeCheckout}>
                  Volver a la Tienda
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Ecommerce;
