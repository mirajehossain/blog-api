const path = require('path');
const PostModel = require('../utils/post');
const Response = require('../helper/response');

const post = {};

post.GetPost = async (req, res) => {
  try {
    const { page } = req.query;
    const posts = await PostModel.getPost(page);
    return res.send(Response.Success(true, posts, 'Get all posts'));
  } catch (e) {
    return res.send(Response.Error(false, `${e.message}`, `${e}`));
  }
};

post.AddNewPost = async (req, res) => {
  try {
    const DataObject = req.body;
    const response = await PostModel.addPost(DataObject);
    return res.send(Response.Success(true, response, 'New Post added Successfully.'));
  } catch (e) {
    return res.send(Response.Error(false, 'An error occur', e));
  }
};
post.ImageUpload = (req, res) => {
  console.log(req.headers.host);
  const imagepath = req.file.originalname;
  const sourcePath = `http://${path.join(`${req.headers.host}/static/${imagepath}`)}`;
  console.log(sourcePath);
  return res.send({
    success: true,
    link: sourcePath,
    message: 'image uploaded',
  });
  // next();
};

post.UpdatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    delete data.id;
    const updated = await PostModel.updatePost(id, data);
    return await res.send(Response.Success(true, updated, 'Post Update Successfully.'));
  } catch (e) {
    return res.send(Response.Error(false, 'An error occur'));
  }
};


post.DeletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await PostModel.deletePost(id);
    return res.send(Response.Success(true, response, 'Post Delete Successfully.'));
  } catch (e) {
    return res.send(Response.Error(false, `${e.message}`, `${e}`));
  }
};

post.SearchPost = async (req, res) => {
  try {
    const { string } = req.body;
    const posts = await PostModel.searchPost(string);
    console.log('search: ', posts);
    return res.send(Response.Success(true, posts, 'Search posts here.'));
  } catch (e) {
    return res.send(Response.Error(false, `${e.message}`, `${e}`));
  }
};

post.FindBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const response = await PostModel.findBySlug(slug);
    return res.send(Response.Success(true, response, 'Successfully found.'));
  } catch (e) {
    console.log(e.message);
    return res.send(Response.Error(false, `${e.message}`, `${e}`));
  }
};

post.MostPopularPost = async (req, res) => {
  try {
    const response = await PostModel.mostPopularPost();
    console.log('response:-------', response)
    return res.send(Response.Success(true, response, 'Successfully found.......'));
  } catch (e) {
    console.log(e.message);
    return res.send(Response.Error(false, 'An error occur', e));
  }
};

post.FindByCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await PostModel.findByCategory(slug);
    return res.send(Response.Success(true, result, 'Successfully fIND by category.'));
  } catch (e) {
    return res.send(Response.Error(false, 'An error occur'));
  }
};


module.exports = post;
