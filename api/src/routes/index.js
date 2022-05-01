const { Router } = require("express");
const router = Router();
const { prueba, crearclient, kpiDeClientes, listclientes } = require("../controllers/users.controllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.route("/prueba").get(prueba);

router.route("/crearcliente").post(crearclient)

router.route('/kpideclientes').get(kpiDeClientes)

router.route('/listclientes').get(listclientes)

module.exports = router;
