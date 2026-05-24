import React, { useState } from 'react';
import './login.css';
import { FiMail, FiLock, FiUser, FiCheckCircle } from 'react-icons/fi';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulamos el envío del formulario
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      // Limpiar campos
      setEmail('');
      setPassword('');
      setName('');
      setConfirmPassword('');
    }, 3000);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        {formSubmitted ? (
          <div className="form-success">
            <FiCheckCircle className="success-icon-spin" size={60} />
            <h2>{isRegister ? '¡Cuenta Creada!' : '¡Sesión Iniciada!'}</h2>
            <p>
              {isRegister 
                ? 'Hemos registrado tus datos en la base de datos simulada del Django backend.' 
                : 'Ingresaste exitosamente con el sistema JWT autenticado simulado.'}
            </p>
          </div>
        ) : (
          <>
            <h1>{isRegister ? 'Crear Cuenta' : 'Iniciar Sesión'}</h1>
            <p className="login-subtitle">
              {isRegister 
                ? 'Regístrate para acceder al panel de control de servicios.' 
                : 'Ingresa para ver el estado de tus proyectos y soporte VPS.'}
            </p>

            <form onSubmit={handleSubmit} className="login-form">
              {isRegister && (
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo</label>
                  <div className="input-with-icon">
                    <FiUser className="input-icon" />
                    <input
                      type="text"
                      id="name"
                      placeholder="Leandro Santiago"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <div className="input-with-icon">
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    placeholder="cliente@negocio.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <div className="input-with-icon">
                  <FiLock className="input-icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {isRegister && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                  <div className="input-with-icon">
                    <FiLock className="input-icon" />
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <button type="submit" className="btn btn-primary login-submit-btn">
                {isRegister ? 'Crear Cuenta' : 'Ingresar'}
              </button>
            </form>

            <div className="social-login-divider">
              <span>O continuar con</span>
            </div>

            <div className="social-buttons">
              <button className="social-btn" onClick={() => alert('Autenticación de Google Simula')}>
                <FaGoogle size={18} /> Google
              </button>
              <button className="social-btn" onClick={() => alert('Autenticación de GitHub Simula')}>
                <FaGithub size={18} /> GitHub
              </button>
            </div>

            <div className="login-toggle-footer">
              {isRegister ? (
                <p>
                  ¿Ya tienes una cuenta?{' '}
                  <span className="toggle-mode-link" onClick={() => setIsRegister(false)}>
                    Inicia Sesión aquí
                  </span>
                </p>
              ) : (
                <p>
                  ¿No tienes una cuenta?{' '}
                  <span className="toggle-mode-link" onClick={() => setIsRegister(true)}>
                    Regístrate aquí
                  </span>
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
