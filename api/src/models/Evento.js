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
      fechaI: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fechaF: {
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
