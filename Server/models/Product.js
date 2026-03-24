module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Product" , {
        title: {
            type: DataTypes.STRING, allowNull : false} ,
        description: {
            type: DataTypes.TEXT, },
        price: {
            type: DataTypes.FLOAT, allowNull : false} ,
        imageUrl: {
            type: DataTypes.STRING}
           
        
    });
};