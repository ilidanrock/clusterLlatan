const { Router } = require("express");
const router = Router();
const { prueba } = require("../controllers/users.controllers");
const { User } = require("../db");
const { check } = require("../validation/validation");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.route("/prueba").get(prueba);

router.post("/crearcliente", async (req, res, next) => {
  try {
    const { name, lastName, age, birthday } = req.body;
    const validations = check({
      name: name,
      lastName: lastName,
      age: age,
      birthday: new Date(birthday),
    });
    console.log(validations);
    if (validations === true) {
      await User.create({ name, lastName, age, birthday });
      res.send(`User ${name} has been created.`).status(201);
    } else {
      throw new Error(
        validations.reduce(
          (acu, element) => `${acu}  ${element.message}`,
          ""
        )
      );
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
