const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
<<<<<<< HEAD:api/src/models/Type.js
  sequelize.define(
    "Type",
    {
      name: {
        type: DataTypes.STRING,
      },
=======
    sequelize.define('Type', {
        cliente: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull:false,
        }
>>>>>>> f7117088f01dfaa0c5700342a12a1ec04d76fbe6:api/src/models/Evento.js
    },
    {
      timestamps: false,
    }
  );
};
