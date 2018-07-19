const PostModel = require('../models/post');
const Response = require('../helper/response');
let post = {};

post.GetPost = (req, res) => {
    let pagination = {
        start: req.body.start || 1,
        end: req.body.end || 10
    }
    PostModel.getPost(pagination,function (error, result) {
        if(error){
            res.json(Response.Error(false, error));
        } else {
            res.json(Response.Success(true,result,'Get Post'));
        }
    })
};

post.AddNewPost = (req, res) => {

    let DataObject =req.body;
    PostModel.addPost(DataObject,function (error,result) {
        if(error){
            res.json(Response.Error(false, error));
        } else {
            res.json(Response.Success(true,result, "New Post added Successfully." ));
        }
    });
};

post.UpdatePost = (req, res) => {

    let id = req.params.id;
    let data = req.body;
    delete data.id;
    PostModel.updatePost(id,data,function (error,result) {
        if(error){
            res.json(Response.Error(false, error));
        } else {
            res.json(Response.Success(true,result, "Post Update Successfully." ));
        }

    })
};


post.DeletePost = (req, res) => {

    let id = req.params.id;
    PostModel.deletePost(id,function (error, result) {
        if(error){
            res.json(Response.Error(false, error));
        } else {
            res.json(Response.Success(true,result, "Post Delete Successfully." ));
        }

    })
};

post.FindByID = (req, res) => {
    let id = req.params.id;
    PostModel.findByID(id,function (error, result) {
        if(error){
            res.json(Response.Error(false, error));
        } else {
            res.json(Response.Success(true,result, "Successfully found." ));
        }

    })
};

post.FindByCategory = (req, res) => {
    let id = req.params.id;
    PostModel.findByCategory(id,function (error, result) {
        if(error){
            res.json(Response.Error(false, error));
        } else {
            res.json(Response.Success(true,result, "Successfully fIND by category." ));
        }
    })
};


module.exports = post;