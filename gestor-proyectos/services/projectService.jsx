import axios from 'axios';

export const getProjects = async () => {
  const response = await axios.get('/api/projects');
  return response.data;
};

export const createProject = async (projectData) => {
  const response = await axios.post('/api/projects', projectData);
  return response.data;
};

// Similar para editar y eliminar
