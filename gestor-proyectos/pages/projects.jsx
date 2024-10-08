import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/api'; // Asegúrate de la ruta correcta

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token'); // Asegúrate de que estás guardando el token al iniciar sesión

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects(token);
        setProjects(response.data);
      } catch (err) {
        setError('Error al cargar los proyectos');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [token]);

  if (loading) return <div>Cargando proyectos...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
