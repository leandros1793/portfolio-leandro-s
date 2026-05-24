import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { RiCodeSSlashLine } from 'react-icons/ri';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleBrandClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="global-navbar">
      <div className="navbar-container">
        <NavLink to="/" end onClick={handleBrandClick} className="navbar-brand" title="Volver al Inicio">
          <RiCodeSSlashLine className="brand-icon" />
          <span>Leandro Santiago</span>
        </NavLink>

        <div className="navbar-links">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              isActive ? "nav-item active-link" : "nav-item"
            }
          >
            Inicio
          </NavLink>
          
          <NavLink 
            to="/ecommerce" 
            className={({ isActive }) => 
              isActive ? "nav-item active-link" : "nav-item"
            }
          >
            E-commerce Demo
          </NavLink>

          <NavLink 
            to="/auditor" 
            className={({ isActive }) => 
              isActive ? "nav-item active-link" : "nav-item"
            }
          >
            Auditor Shopify
          </NavLink>
          
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              isActive ? "nav-item active-link" : "nav-item"
            }
          >
            Blog Técnico
          </NavLink>
          
          <NavLink 
            to="/login" 
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
