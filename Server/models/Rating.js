// Betygmodell - representerar ett betyg på en produkt
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Rating" , {
        // unikt id som skapas automatiskt
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
         //Betygvärde mellan 1 och 5
        value: {
            type: DataTypes.INTEGER,
             allowNull : false,
             validate: {
                min: 1,
                max: 5
             }
         }  
    });
};