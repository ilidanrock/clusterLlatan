const { DataTypes } = require('sequelize');
const { estimedDeath } = require('../utils/estimedDeath');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id: {
      type: DataTypes.UUID,//esto es lo que garantiza que no se va a repetir
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,// este campo no puede quedar en blanco
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: 'compositeIndex'
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: 'compositeIndex'
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      set(value) {
        this.setDataValue('birthday', value );

        this.setDataValue('estimateDeathDay', estimedDeath(value));
      }
    },
    estimateDeathDay: {
      type: DataTypes.DATEONLY
    },
  });
};
