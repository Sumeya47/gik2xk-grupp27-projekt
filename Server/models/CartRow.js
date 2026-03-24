// Kopplingstabell mellan varukorg och produkter (många-till-många)
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("CartRow" , {
        // unikt id som skapas automatiskt
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       // Antalet av en specifik produkt i varukorgen
        amount: {
            type: DataTypes.INTEGER,
             allowNull : false,
              defaultValue : 1,
              validate: {
                min: 1
              }
        }       
    });
};

