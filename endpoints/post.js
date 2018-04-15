const PostModel = require('../models/post');

let post = {};

post.GetPost = (req, res) => {
    PostModel.getPost(function (error, result) {
        if(error){
            throw error;
        }
        res.json({
            success:true,
            data:result
        })
    })
};

post.AddNewPost = (req, res) => {

    let DataObject =req.body;
    PostModel.addPost(DataObject,function (error,result) {
        if(error)
            // throw new Error(error) ;
            throw error;

        res.json({
            success:true,
            message:"New Post added Successfully.",
            data:result
        });
    });
};

post.UpdatePost = (req, res) => {

    let id = req.params.id;
    let data = req.body;

    PostModel.updatePost(id,data,function (error,result) {
        if(error){
        // throw new Error(error) ;
            throw error;
        } else {
        res.json({
            success:true,
            message:"Post Update Successfully.",
            data:result
            });
        }
    })
};


post.DeletePost = (req, res) => {

    let id = req.params.id;
    PostModel.deletePost(id,function (error, result) {
        if(error){
            // throw new Error(error) ;
            throw error;
        } else {
            res.json({
                success:true,
                message:"Post Deleted Successfully.",
                data:result
            });
        }
    })
};

post.FindByID = (req, res) => {
    let id = req.params.id;
    PostModel.findByID(id,function (error, result) {
        if(error){
            // throw new Error(error) ;
            throw error;
        } else {
            res.json({
                success:true,
                message:"Search Operation Successful.",
                data:result
            });
        }
    })
};

post.FindByCategory = (req, res) => {
    let id = req.params.id;
    PostModel.findByCategory(id,function (error, result) {
        if(error){
            // throw new Error(error) ;
            throw error;
        } else {
            res.json({
                success:true,
                message:"Search Operation Successful.",
                data:result
            });
        }
    })
};


module.exports = post;