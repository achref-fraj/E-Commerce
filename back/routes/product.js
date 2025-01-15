const express = require("express");
const Router = express.Router();

const {getAllprod,addprod,deleteprod,update}=require("../controller/product")



Router.get("/",getAllprod)
Router.post("/add", addprod)
Router.delete("/:id", deleteprod)
Router.get("/update", update)



  

module.exports = Router;