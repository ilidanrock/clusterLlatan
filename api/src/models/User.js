const { DataTypes } = require('sequelize');
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
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });
};
