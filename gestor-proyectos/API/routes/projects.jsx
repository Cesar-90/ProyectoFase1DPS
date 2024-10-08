const express = require('express');
const db = require('../db');
const { verifyToken } = require('./auth');
const router = express.Router();

// Obtener todos los proyectos
router.get('/', verifyToken, (req, res) => {
  db.all('SELECT * FROM projects', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'Error obteniendo proyectos' });
    res.status(200).json(rows);
  });
});

// Crear un proyecto
router.post('/', verifyToken, (req, res) => {
  if (req.userRole !== 'Gerente de Proyectos' && req.userRole !== 'Administrador') {
    return res.status(403).json({ error: 'Permiso denegado' });
  }

  const { name, description } = req.body;
  const sql = 'INSERT INTO projects (name, description, manager_id) VALUES (?, ?, ?)';
  db.run(sql, [name, description, req.userId], function(err) {
    if (err) return res.status(500).json({ error: 'Error creando proyecto' });
    res.status(201).json({ id: this.lastID });
  });
});

// Actualizar un proyecto
router.put('/:id', verifyToken, (req, res) => {
  const { name, description } = req.body;
  const sql = 'UPDATE projects SET name = ?, description = ? WHERE id = ?';

  db.run(sql, [name, description, req.params.id], function(err) {
    if (err) return res.status(500).json({ error: 'Error actualizando proyecto' });
    res.status(200).json({ message: 'Proyecto actualizado' });
  });
});

// Eliminar un proyecto
router.delete('/:id', verifyToken, (req, res) => {
  const sql = 'DELETE FROM projects WHERE id = ?';
  db.run(sql, [req.params.id], function(err) {
    if (err) return res.status(500).json({ error: 'Error eliminando proyecto' });
    res.status(200).json({ message: 'Proyecto eliminado' });
  });
});

module.exports = router;
