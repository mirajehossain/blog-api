const PostModel = require('../models/post');

let post = {};

post.GetPost = (req, res) => {
    PostModel.getPost(function (error, result, fields) {
        if(error){
            throw error;
        }
        res.json({
            success:true,
            data:result,
            fields:fields
        })
    })
};

post.AddNewPost = (req, res) => {

    let DataObject =req.body;
    PostModel.addPost(DataObject,function (error,result, fields) {
        if(error)
            // throw new Error(error) ;
            throw error;

        res.json({
            success:true,
            message:"New Post added Successfully.",
            data:result,
            fields:fields
        });
    });
};

post.UpdatePost = (req, res) => {

    let id = req.params.id;
    let data = req.body;

    PostModel.updatePost(id,data,function (error,result,fields) {
        if(error){
        // throw new Error(error) ;
            throw error;
        } else {
        res.json({
            success:true,
            message:"Post Update Successfully.",
            data:result,
            fields:fields

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

};

post.FindByCategory = (req, res) => {

};


module.exports = post;