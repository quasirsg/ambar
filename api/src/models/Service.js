const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("service", {
      device: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imei: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      replacement: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    });
  };
  