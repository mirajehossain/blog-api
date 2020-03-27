const express = require('express');


const router = express.Router();
const uploadImage = require('../helper/image.upload');

const post = require('../controllers/post');
const category = require('../controllers/category');
const about = require('../controllers/about');


router.route('/').get((req, res) => res.send({ title: "Welcome to Miraje's blog API" }));

/**
 *
 *  Blog Post Endpoints
 *
 * * */
router.route('/api/posts').get(post.GetPost);
router.route('/api/post/:slug').get(post.FindBySlug);
router.route('/api/post/find-by-category/:slug').get(post.FindByCategory);

router.route('/api/post/add-post').post(post.AddNewPost);
router.route('/api/post/image-upload').post(uploadImage.single('img'), post.ImageUpload);


router.route('/api/post/update-post/:id').put(post.UpdatePost);
router.route('/api/post/delete-post/:id').delete(post.DeletePost);
router.route('/api/post/search').post(post.SearchPost);


/**
 *  Category Endpoints
 *
 */

router.route('/api/category/get-categories').get(category.GetCategoies);
router.route('/api/category/add-category').post(category.AddCategory);
router.route('/api/category/update-category/:id').put(category.UpdateCategory);
router.route('/api/category/delete-category/:id').delete(category.DeleteCategory);


/**
 *  About Endpoints
 *
 * */


router.route('/api/about/get-about').get(about.GetAbout);
router.route('/api/about/add-about').post(about.AddAbout);
router.route('/api/about/update-about/:id').put(about.UpdateAbout);
router.route('/api/about/delete-about/:id').delete(about.DeleteAbout);


module.exports = router;
