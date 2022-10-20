const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Evento",
    {
      cliente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaInicio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaFin: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: true,
    }
  );
};
