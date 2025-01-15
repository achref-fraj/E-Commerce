const express = require("express");
const Router = express.Router();

const {getAlluser,login,register,currentUser}=require("../controller/user")

const verifyToken = require("../Middelware/userAuth");

Router.get("/",getAlluser)
Router.post("/login", login);
Router.post("/register", register);
Router.get("/getUser", verifyToken, currentUser);


// Router.post("/register", (req, res) => {
//     console.log("POST /register hit");
//     res.send("Route works!");
//   });
  

module.exports = Router;