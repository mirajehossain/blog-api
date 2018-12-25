const PostModel = require('../models/post');
const Response = require('../helper/response');
const path = require('path');
let post = {};

post.GetPost = (req, res) => {

    PostModel.getPost(function (error, result) {
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
post.ImageUpload= (req, res, next) => {
    console.log(req.headers.host);
    let imagepath= req.file.originalname;
    let sourcePath = 'http://'+path.join(req.headers.host+`/static/${imagepath}`);
    console.log(sourcePath);
    res.send({
        success:true,
        link: sourcePath,
        message: 'image uploaded'
    });
    // next();
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

post.SearchPost = (req, res) => {

    let string = req.body.string;
    PostModel.searchPost(string,function (error, result) {
        if(error){
            res.json(Response.Error(false, error));
        } else {
            res.json(Response.Success(true,result, "Search posts here." ));
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