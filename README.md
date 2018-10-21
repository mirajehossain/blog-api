# Blog-API

## Prerequisites
- > Install [NodeJS](https://nodejs.org/en/download/).
- > Install and connect [mysql](https://www.mysql.com/).

## After complete installation Node and mysql.

```shell
git clone https://github.com/mirajehossain/blog-api.git
cd blog-api
npm install
npm start
```


## APIs 

### Posts endpoints
   * GET
      * /api/posts
      * /api/post/:id
      * /api/post/find_by_category/:id
   * POST
      * /api/post/add_post
   * PUT
      * /api/post/update_post/:id
   * DELETE
      * /api/post/delete_post/:id
      
### Category endpoints
   * GET
      * /api/category/get_categories
   * POST
      * /api/category/add_category
   * PUT 
      * /api/category/update_category/:id
   * DELETE
      * /api/category/delete_category/:id
###  About endpoints
   * GET
      * /api/about/get_about
   * POST
      * /api/about/add_about
   * PUT 
      * /api/about/update_about/:id
   * DELETE
      * /api/about/delete_about/:id
      
      
   
