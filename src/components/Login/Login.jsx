import React, { useState } from 'react';
import './login.css'; // Importar estilos externos
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    // Aquí puedes agregar la lógica para conectarlo con tu backend
  };

  return (
    <div className="login-container">
            <div className="header-links text-center">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/ecommerce">Ecommerce</NavLink>
              <NavLink to="/#">Inicio</NavLink>
            </div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
