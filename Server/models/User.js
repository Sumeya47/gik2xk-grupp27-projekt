const { DataTypes } = require("sequelize")

// Användarmodell
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User" , {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,

         email: {
            type: DataTypes.STRING(200),
             allowNull : false,
            validate: {
                len: [4, 200],
                isEmail: true
            } 
        },
        username: {
            type: DataTypes.STRING(50),
             allowNull: false,
             validate: {
                len: [3, 50]
             }
            },
            
            password: {
            type: DataTypes.STRING(255),
            allowNull: false
            },
        
            firtsName: DataTypes.STRING(50),
             lastName: DataTypes.STRING(50),
            
       
    });
};







