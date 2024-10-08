const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');
const router = express.Router();

const secretKey = 'secret_key';  // En un entorno real, usa una variable de entorno para esto

// Registro de usuario
router.post('/register', (req, res) => {
  const { username, password, role } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  const sql = 'INSERT INTO users (username, password, role) VALUES (?, ?, ?)';
  db.run(sql, [username, hashedPassword, role], function(err) {
    if (err) return res.status(500).json({ error: 'Error registrando usuario' });
    res.status(201).json({ message: 'Usuario registrado' });
  });
});

// Inicio de sesión
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ?';
  db.get(sql, [username], (err, user) => {
    if (err || !user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) return res.status(401).json({ token: null });

    const token = jwt.sign({ id: user.id, role: user.role }, secretKey, {
      expiresIn: 86400 // 24 horas
    });

    res.status(200).json({ auth: true, token });
  });
});

// Middleware para verificar el token JWT
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ auth: false, message: 'No token provided' });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token' });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
}

module.exports = router;
module.exports.verifyToken = verifyToken;
