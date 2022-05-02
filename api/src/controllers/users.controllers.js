const { Sequelize, Op } = require("sequelize");

const { User } = require("../db");

const { check, isValidDate } = require("../validation/validation");

const crearclient = async (req, res, next) => {
  try {
    const { name, lastName, age, birthday } = req.body;
    if (!isValidDate(birthday))
      res.status(400).send("Date has to be formatted yyyy-mm-dd.");
    const validations = check({
      name: name,
      lastName: lastName,
      age: age,
      birthday: new Date(birthday),
    });

    if (validations === true) {
      // name, lastName, age, birthday
      const [user, created] = await User.findOrCreate({
        where: { [Op.and]: [{ name: name }, { lastName: lastName }] },
        defaults: {
          name: name,
          lastName: lastName,
          age: age,
          birthday: birthday,
        },
      });
      created
        ? res.status(201).send(`User ${name} has been created.`)
        : res
            .status(400)
            .send(`User ${user.name} ${user.lastName} already exists.`);
    } else {
      res
        .status(400)
        .send(
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
          "estimateDeathDay",
          "createdAt",
          "updatedAt",
        ],
        include: [
          [Sequelize.fn("AVG", Sequelize.col("age")), "avg"],
          [Sequelize.fn("stddev_samp", Sequelize.col("age")), "stddev"],
        ],
      },
    });
    console.log(allClients[0].dataValues);
    res.status(200).json({
      averageAge: Math.round(allClients[0].dataValues.avg),
      standardDeviation:
        parseFloat(parseFloat(allClients[0].dataValues.stddev).toFixed(4)) || 0,
    });
  } catch (error) {
    next(error);
  }
};

const listclientes = async (req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  crearclient,
  kpiDeClientes,
  listclientes,
};
