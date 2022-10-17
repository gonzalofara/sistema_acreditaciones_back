const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('Type', {
        cliente: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull:false,
        }
    },
    {
        timestamps: false
    });
}

