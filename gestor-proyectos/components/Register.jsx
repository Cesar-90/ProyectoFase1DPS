import React, { useState } from 'react';
import { registerUser } from '../services/api'; // Asegúrate de la ruta correcta

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      // Redirigir o mostrar un mensaje de éxito
    } catch (err) {
      setError('Error al registrarse');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="username" 
        value={formData.username} 
        onChange={handleChange} 
        placeholder="Username" 
        required 
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
        required 
      />
      <input 
        type="password" 
        name="password" 
        value={formData.password} 
        onChange={handleChange} 
        placeholder="Password" 
        required 
      />
      {error && <div>{error}</div>}
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;
