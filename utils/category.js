const slugify = require('slugify');
const knex = require('../db/config/knex');

const CategoryModel = {};

CategoryModel.addCategory = async (dataOBJ) => {
  dataOBJ.slug = `${slugify(dataOBJ.title.toLowerCase())}-${Math.floor(Math.random() * 90000) + 10000}`;
  return await knex('categories').insert(dataOBJ);
};

CategoryModel.getCategory = async () => {
  return await knex('categories').select();
};

CategoryModel.updateCategory = async (id, dataOBJ) => {
  return await knex('categories').update(dataOBJ).where({ id });
};

CategoryModel.deleteCategory = async (id) => {
  return await knex('categories').delete().where({ id });
};

module.exports = CategoryModel;
