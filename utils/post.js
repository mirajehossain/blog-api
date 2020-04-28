const slugify = require('slugify');
const knex = require('../db/config/knex');

const PostModel = {};

PostModel.addPost = async (dataOBJ) => {
  dataOBJ.slug = `${slugify(dataOBJ.title.toLowerCase())}-${Math.floor(Math.random() * 90000) + 10000}`;
  console.log(dataOBJ);
  const data = await knex('posts').insert(dataOBJ);
  return data;
};

PostModel.getPost = async (page = 1, limit = 10) => {
  try {
    const count = await knex.from('posts').count({ title: 'title' });
    const totalPage = Math.ceil(count[0].title / 10);
    const posts = await knex.select().from('posts').orderBy('created_at', 'desc').offset((page - 1) * limit).limit(limit);
    return {
      posts,
      count: count[0].title,
      currentPage: Number(page),
      nextPage: totalPage > Number(page) ? Number(page) + 1 : null,
      previousPage: Number(page) > 1 ? Number(page) - 1 : null,
      totalPage,
    };
  } catch (e) {
    return e;
  }
};

PostModel.mostPopularPost = async () => {
  try {
    return await knex.select('title', 'slug').from('posts').orderBy('counter', 'desc').limit(5);
  } catch (e) {
    return e;
  }
};

PostModel.updatePost = async (id, dataOBJ) => await knex('posts')
  .where({ id })
  .update(dataOBJ);

PostModel.deletePost = async id => await knex('posts')
  .delete()
  .where({ id });

PostModel.searchPost = async string => await knex('posts')
  .where('title', 'like', `%${string}%`);

PostModel.findBySlug = async slug => await knex('posts')
  .select()
  .where({ slug });

PostModel.findByCategory = async slug => await knex('posts')
  .select()
  .where({ category_slug: slug });

module.exports = PostModel;
