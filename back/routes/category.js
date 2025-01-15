const express = require("express");
const Router = express.Router();

const {getcategory,addcategory,deletecat,updatecat}=require("../controller/category")



Router.get("/",getcategory)
Router.post("/add", addcategory);
Router.post("/delete", deletecat);
Router.get("/update", updatecat);



  

module.exports = Router;