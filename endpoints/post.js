const PostModel = require('../models/post');

let post = {};

post.GetPost = (req, res) => {
    PostModel.getPost(function (error, result, fields) {

    })
};

post.AddNewPost = (req, res) => {

    let DataObject = {};
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
    let id = 2;
    let data = {};
    PostModel.updatePost(id,data,function () {
        if(error)
        // throw new Error(error) ;
            throw error;

        res.json({
            success:true,
            message:"Post Update Successfully.",
            data:result,
            fields:fields
        });
    })
};


post.DeletePost = (req, res) => {

};

post.FindByID = (req, res) => {

};

post.FindByCategory = (req, res) => {

};


module.exports = post;