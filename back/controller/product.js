const { Product } = require("../database/model/product");

module.exports = {
   
    getAllprod: async (req, res) => {
        try {
          const { categoryId } = req.query;
      
          const catbyId = categoryId ? { where: { categoryId } } : {};
          const getprod = await db.Product.findAll(catbyId);
      
          res.send(getprod);
        } catch (error) {
          res.status(500).send({ message: 'Error retrieving products', error });
        }
      },
      
   
    addprod: async (req, res) => {
        try {
            const { Name, imageUrl, price ,userId,categoryId} = req.body;
            
            if (!Name || !imageUrl || !price) {
                return res.status(400).send({ message: "All fields are required" });
            }
            
            const newProduct = await db.Product.create({
                Name,
                imageUrl,
                price,userId,categoryId
            });

            res.status(201).send({ message: "Product added successfully", product: newProduct });
        } catch (error) {
            res.status(500).send({ message: "Error adding product", error });
        }
    },

  
    deleteprod: async (req, res) => {
        try {
            const { id } = req.params;

            const product = await db.Product.findByPk(id);
            if (!product) {
                return res.status(404).send({ message: "Product not found" });
            }

            await product.destroy();
            res.send({ message: "Product deleted successfully" });
        } catch (error) {
            res.status(500).send({ message: "Error deleting product", error });
        }
    },

  
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { Name, imageUrl, price } = req.body;

            const product = await db.Product.findByPk(id);
            if (!product) {
                return res.status(404).send({ message: "Product not found" });
            }

           
            product.Name = Name || product.Name;
            product.imageUrl = imageUrl || product.imageUrl;
            product.price = price || product.price;

            await product.save();

            res.send({ message: "Product updated successfully", product });
        } catch (error) {
            res.status(500).send({ message: "Error updating product", error });
        }
    },
};
