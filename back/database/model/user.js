module.exports = (connection, DataTypes) => {
    // const bcrypt = require('bcrypt');
    const User = connection.define(
      "users",
      {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            isEmail: true, 
            allowNull: false
                
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {timestamps: true},
      
   
    )
    return User;
  };
  