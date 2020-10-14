const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("client", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dni: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numero_telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  };
  