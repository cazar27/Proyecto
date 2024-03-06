const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth.controllers');
const { createUser, updateUser, getUsersCount, getUserByUsername, getUserByEmail, getUserById, deleteUser, updatePassword } = require('../controllers/users.controllers');
const { paginatedResults } = require('../controllers/generic.controller');

const tokenValidation = require('../middlewares/auth.validations');

const User = require('../models/User');

const router = Router();

/* --------------------------------   USERS ROUTES   --------------------------------- */

//GET Login User
router.post('/login',
check('email','Introduzca un email valido').isEmail().isLength(7),
check('password','Introduzca una contraseña valida').isStrongPassword(),
login);

// POST Create User
router.post('/user',
  check('username', 'Introduzca un nombre de usuario válido').not().isEmpty(),
  check('name', 'Introduzca un nombre válido').not().isEmpty(),
  check('surnames', 'Introduzca apellidos válidos').not().isEmpty(),
  check('email', 'Introduzca un correo electrónico válido').isEmail().isLength(7),
  check('password', 'Introduzca una contraseña válida').isStrongPassword(),
  check('age', 'Introduzca una edad válida').isNumeric(),
  check('active', 'Gestión de usuarios activos').isBoolean(),
  createUser
);

// GET Users pagination list 
router.get('/users', tokenValidation, paginatedResults(User), (req, res) => { res.json(res.paginatedResults) });

//GET Users count
router.get('/users/count',tokenValidation, getUsersCount);

// GET User by ID
router.get('/user/:id', 
check('id','Introduzca un id valido').not().isEmpty(),
tokenValidation,
getUserById);

//GET User by username
router.get('/user/search/:username',
check('username','Introduzca un nombre de usuario valido').not().isEmpty(),
tokenValidation,
getUserByUsername);

// PUT Update user by ID
router.put('/user/:id',
  check('username', 'Introduzca un nombre de usuario válido').not().isEmpty(),
  check('name', 'Introduzca un nombre válido').not().isEmpty(),
  check('surnames', 'Introduzca apellidos válidos').not().isEmpty(),
  check('age', 'Introduzca una edad válida').isNumeric(),
  check('active', 'Gestión de usuarios activos').isBoolean(),
  tokenValidation,
  updateUser
);

// PUT Update password by user ID
router.put('/user/change_password/:id',tokenValidation, updatePassword);

// DELETE User by ID
router.delete('/user/:id', tokenValidation, deleteUser);

module.exports = router;