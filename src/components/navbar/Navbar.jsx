import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bloquear el scroll de la página de fondo cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleBrandClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="global-navbar">
      <div className="navbar-container">
        {/* Logotipo */}
        <NavLink to="/" end onClick={handleBrandClick} className="navbar-brand" title="Volver al Inicio">
          <RiCodeSSlashLine className="brand-icon" />
          <span>Leandro Santiago</span>
        </NavLink>

        {/* Botón Hamburguesa para móviles */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Alternar menú"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Enlaces de navegación */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            end
            onClick={closeMobileMenu}
            className={({ isActive }) => 
              isActive ? "nav-item active-link" : "nav-item"
            }
          >
            Inicio
          </NavLink>
          
          <NavLink 
            to="/ecommerce" 
            onClick={closeMobileMenu}
            className={({ isActive }) => 
              isActive ? "nav-item active-link" : "nav-item"
            }
          >
            E-commerce Demo
          </NavLink>

          <NavLink 
            to="/auditor" 
            onClick={closeMobileMenu}
            className={({ isActive }) => 
              isActive ? "nav-item active-link" : "nav-item"
            }
          >
            Auditor Shopify
          </NavLink>
          
          <NavLink 
            to="/blog" 
            onClick={closeMobileMenu}
            className={({ isActive }) => 
              isActive ? "nav-item active-link" : "nav-item"
            }
          >
            Blog Técnico
          </NavLink>
          
          <NavLink 
            to="/login" 
            onClick={closeMobileMenu}
            className={({ isActive }) => 
              isActive ? "nav-item active-link login-btn" : "nav-item login-btn"
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
