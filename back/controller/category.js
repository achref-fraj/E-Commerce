const { Category } = require("../database/model/category");

module.exports = {
  
    getcategory: async (req, res) => {
        try {
            const getcate = await db.Category.findAll();
            res.send(getcate);
        } catch (error) {
            res.status(500).send({ message: "Error retrieving categories", error });
        }
    },

    addcategory: async (req, res) => {
        try {
            const { Name, description } = req.body;

          
            if (!Name) {
                return res.status(400).send({ message: "Name is required" });
            }

            const existingCategory = await db.Category.findOne({ where: { Name } });
            if (existingCategory) {
                return res.status(400).send({ message: "Category  exists" });
            }

            const newCategory = await db.Category.create({
                Name,
                description
            });

            res.status(201).send({ message: "Category added succes", category: newCategory });
        } catch (error) {
            res.status(500).send({ message: "Error add category", error });
        }
    },

  
    deletecat: async (req, res) => {
        try {
            const { id } = req.params;

            const category = await db.Category.findByPk(id);
            if (!category) {
                return res.status(404).send({ message: "Category not found" });
            }

            await category.destroy();
            res.send({ message: "Category deleted successfully" });
        } catch (error) {
            res.status(500).send({ message: "Error deleting category", error });
        }
    },


    updatecat: async (req, res) => {
        try {
            const { id } = req.params;
            const { Name, description } = req.body;

            const category = await db.Category.findByPk(id);
            if (!category) {
                return res.status(404).send({ message: "Category not found" });
            }

           
            category.Name = Name || category.Name;
            category.description = description || category.description;

            await category.save();

            res.send({ message: "Category updated successfully", category });
        } catch (error) {
            res.status(500).send({ message: "Error updating category", error });
        }
    },
};
