const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("service", {
      equipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modelo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imei: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      descripcion_falla: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      repuesto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      monto: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    });
  };
  