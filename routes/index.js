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
router.route('/api/post/:id').get(post.FindByID);
router.route('/api/post/find_by_category/:id').get(post.FindByCategory);

router.route('/api/post/add_post').post(post.AddNewPost);
router.route('/api/post/image_upload').post(uploadImage.single('img'), post.ImageUpload);


router.route('/api/post/update_post/:id').put(post.UpdatePost);
router.route('/api/post/delete_post/:id').delete(post.DeletePost);
router.route('/api/post/search').post(post.SearchPost);


/**
 *  Category Endpoints
 *
 */

router.route('/api/category/get_categories').get(category.GetCategoies);
router.route('/api/category/add_category').post(category.AddCategory);
router.route('/api/category/update_category/:id').put(category.UpdateCategory);
router.route('/api/category/delete_category/:id').delete(category.DeleteCategory);


/**
 *  About Endpoints
 *
 * */


router.route('/api/about/get_about').get(about.GetAbout);
router.route('/api/about/add_about').post(about.AddAbout);
router.route('/api/about/update_about/:id').put(about.UpdateAbout);
router.route('/api/about/delete_about/:id').delete(about.DeleteAbout);


module.exports = router;
