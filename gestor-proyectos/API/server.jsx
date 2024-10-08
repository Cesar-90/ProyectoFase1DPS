const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuración del middleware
app.use(bodyParser.json());

// Importar las rutas
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const taskRoutes = require('./routes/tasks');
const cors = require('cors');

// Usar las rutas
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use(cors());

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
