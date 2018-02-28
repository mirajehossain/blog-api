const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Express' });
});
/*
app.get('/api/posts',postEndpoint.get);
app.get('/api/post/:id',postEndpoint.getById);
app.get('/api/post/get-by-category/:category_id',postEndpoint.getCategoriesPostbyID);
app.post('/api/post', postEndpoint.post);
app.put('/api/post', postEndpoint.update);
app.delete('/api/post/:id', postEndpoint.delete);


app.get('/api/posts/categories',CategoryEndpoint.get);
app.get('/api/posts/categories-with-count',CategoryEndpoint.getWithCount);
app.get('/api/posts/category-name-by-category-id',CategoryEndpoint.getCatNameWithcatId);
app.post('/api/posts/categories', CategoryEndpoint.post);
app.put('/api/posts/categories', CategoryEndpoint.update);
app.delete('/api/posts/categories/:id', CategoryEndpoint.delete);

app.get('/api/posts-categories/:id',CategoryEndpoint.postCategories);


app.get('/api/TSC',TSCEndpoint.get);
app.post('/api/TSC', TSCEndpoint.post);
app.put('/api/TSC', TSCEndpoint.update);
app.delete('/api/TSC', TSCEndpoint.delete);

app.get('/api/about',    aboutEndpoint.get);
app.post('/api/about',   aboutEndpoint.post);
app.put('/api/about',    aboutEndpoint.update);
app.delete('/api/about', aboutEndpoint.delete);

app.get('/api/contact',    contactEndpoint.get);
app.delete('/api/contact', contactEndpoint.delete);

*/
module.exports = router;
