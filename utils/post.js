const knex = require('../db/config/knex');

const PostModel = {};

PostModel.addPost = async (dataOBJ) => {
  const data = await knex('posts').insert(dataOBJ);
  return data;
};

PostModel.getPost = async () => {
  try {
    return await knex.select().from('posts');
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
