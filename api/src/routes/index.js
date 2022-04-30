const { Router } = require('express');
const { prueba } = require('../controllers/users.controllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.route("/prueba").get(prueba)


module.exports = router;
