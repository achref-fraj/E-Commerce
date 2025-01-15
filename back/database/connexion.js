const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize("rbk-ecom", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});


connection.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


db={}
db.Sequelize=Sequelize
db.connection=connection



db.User=require("./model/user")(connection,DataTypes)
db.Category=require("./model/category")(connection,DataTypes)
db.Product=require("./model/product")(connection,DataTypes)



// db.User.hasMany(db.Todo,{ foreignKey: "users_id" })

db.User.hasMany(db.Product);
db.Product.belongsTo(db.User);


db.Category.hasMany(db.Product)
db.Product.belongsTo(db.Category)

// You can use the .authenticate() function to test if the connection is OK
// finish implementing the database logic


// connection.sync({force : true})

module.exports=db