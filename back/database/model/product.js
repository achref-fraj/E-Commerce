module.exports = (connection, DataTypes) => {
    // const bcrypt = require('bcrypt');
    const Product = connection.define(
      "product",
      {
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
   
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type:DataTypes.FLOAT,
            allowNull: false,

        }
    }
      
   
    )
    return Product;
  };
  