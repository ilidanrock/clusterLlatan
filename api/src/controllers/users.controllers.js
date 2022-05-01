const { Sequelize } = require("sequelize");

const { User } = require("../db");

const { check } = require("../validation/validation");

const prueba = (req, res, next) => {
  console.log("AQUI");
  res.send("Has sentido el poder del cosmos?");
};

const crearclient = async (req, res, next) => {
  try {
    const { name, lastName, age, birthday } = req.body;
    const validations = check({
      name: name,
      lastName: lastName,
      age: age,
      birthday: new Date(birthday),
    });
    if (validations === true) {
      await User.create({ name, lastName, age, birthday });
      res.send(`User ${name} has been created.`).status(201);
    } else {
      throw new Error(
        validations.reduce((acu, element) => `${acu}  ${element.message}`, "")
      );
    }
  } catch (error) {
    next(error);
  }
};

const kpiDeClientes = async (req, res, next) => {
  try {
    const allClients = await User.findAll({
      attributes: {
        exclude: [
          "id",
          "name",
          "lastName",
          "age",
          "birthday",
          "createdAt",
          "updatedAt",
        ],
        include: [
          [Sequelize.fn("AVG", Sequelize.col("age")), "avg"],
          [Sequelize.fn("stddev_samp", Sequelize.col("age")), "stddev"],
        ],
      },
    });
    res.send(allClients[0].dataValues).status(200)
  } catch (error) {
    next(error);
  }
};

const listclientes = (req,res,next)=>{
    
}
module.exports = {
  prueba,
  crearclient,
  kpiDeClientes,
  listclientes
};
