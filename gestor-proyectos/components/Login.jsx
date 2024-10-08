import React, { useState } from 'react';
import { loginUser } from '../services/api'; // Asegúrate de la ruta correcta

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      localStorage.setItem('token', response.data.token); // Guarda el token
      // Redirigir o mostrar un mensaje de éxito
    } catch (err) {
      setError('Error al iniciar sesión');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email" 
        value={credentials.email} 
        onChange={handleChange} 
        placeholder="Email" 
        required 
      />
      <input 
        type="password" 
        name="password" 
        value={credentials.password} 
        onChange={handleChange} 
        placeholder="Password" 
        required 
      />
      {error && <div>{error}</div>}
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;
