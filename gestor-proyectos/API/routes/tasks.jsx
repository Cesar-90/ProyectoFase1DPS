const express = require('express');
const db = require('../db');
const { verifyToken } = require('./auth');
const router = express.Router();

// Obtener todas las tareas de un proyecto específico
router.get('/project/:projectId', verifyToken, (req, res) => {
  const sql = 'SELECT * FROM tasks WHERE project_id = ?';
  db.all(sql, [req.params.projectId], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Error obteniendo tareas' });
    res.status(200).json(rows);
  });
});

// Crear una nueva tarea
router.post('/', verifyToken, (req, res) => {
  const { title, status, project_id, assigned_to } = req.body;
  const sql = 'INSERT INTO tasks (title, status, project_id, assigned_to) VALUES (?, ?, ?, ?)';
})
