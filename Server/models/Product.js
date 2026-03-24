// Produktmodell - representerar en produkt i webbshopen
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Product" , {
        // Produkt namn
        title: {
            type: DataTypes.STRING, allowNull : false} ,
            // Beskrivning av produkten
        description: {
            type: DataTypes.TEXT, },
            // Pris på produkten
        price: {
            type: DataTypes.FLOAT, allowNull : false} ,
            // Länk till produktbilden
        imageUrl: {
            type: DataTypes.STRING}
           
        
    });
};