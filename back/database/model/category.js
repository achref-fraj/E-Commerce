module.exports = (connection, DataTypes) => {
    // const bcrypt = require('bcrypt');
    const Category = connection.define(
      "category",
      {
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,

        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
        },

    }
      
   
    )
    return Category;
  };
  