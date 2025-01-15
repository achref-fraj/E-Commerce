const express = require('express');
const PORT = 3000;
const app = express();
const cors=require("cors")


const database=require("./database/connexion")



const UserRouter=require("./routes/user")
const ProductRouter=require("./routes/product")
const CategoryRouter=require("./routes/category")

app.use(express.json());

app.use(cors())



app.use("/api/user", UserRouter);
app.use("/api/product", ProductRouter);
app.use("/api/category", CategoryRouter);






app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;