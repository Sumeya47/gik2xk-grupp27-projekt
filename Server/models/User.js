const { DataTypes } = require("sequelize")

// Användarmodell representerar en användare i databasen 
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("User" , {
        // unikt id som skapas automatiskt
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        } ,
        // E-postadress måste vara giltig och unik
         email: {
            type: DataTypes.STRING(200),
             allowNull : false,
            validate: {
                len: [4, 200],
                isEmail: true
            } 
        },
        // Användarnamn måste vara minst 3 tecken
        username: {
            type: DataTypes.STRING(50),
             allowNull: false,
             validate: {
                len: [3, 50]
             }
            },
            // Lösenord för inloggning
            password: {
            type: DataTypes.STRING(255),
            allowNull: false
            },
          // Valfria fält för förnamn och efternamn
            firtsName: DataTypes.STRING(50),
             lastName: DataTypes.STRING(50),
            
       
    });
};







