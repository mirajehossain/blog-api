const CategoryModel = require('../models/category');

let category = {};

category.GetCategoies = (req, res) => {
    CategoryModel.getCategory(function (error, result) {
        if(error){
            res.json({
                success:false,
                data:error
            });
        }
        res.json({
            success:true,
            message:"Getting All Category Successfully.",
            data:result
        });

    })
};

category.AddCategory = (req, res) => {
    let category = req.body;
    CategoryModel.addCategory(category,function (error, result) {
        if(error)
        {
            res.json({
                success:false,
                data:error
            });

        }
        res.json({
            success:true,
            message:"New Category added Successfully.",
            data:result
        });
    })
};

category.UpdateCategory = (req, res) => {
    let id = req.params.id;
    let category = req.body;
    CategoryModel.updateCategory(id,category,function (error, result) {
        if (error){
            res.json({
            success: false,
            data: error
        });
    }

        res.json({
            success:true,
            message:"Updated Category Successfully.",
            data:result
        });
    })
};


category.DeleteCategory = (req, res) => {
    let id = req.params.id;
    CategoryModel.deleteCategory(id,function (error, result) {
        if(error){
            res.json({
                success:false,
                data:error
            });
        }

        res.json({
            success:true,
            message:"Deleted Category Successfully.",
            data:result
        });
    })
};

module.exports = category;