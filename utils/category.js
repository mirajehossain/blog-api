const db = require('../config/database');

const table = 'category';
const columns = ['title'];

const CategoryModel = {};

CategoryModel.addCategory = async (dataOBJ) => {
  const object = Object.values(dataOBJ);
  const sql = `INSERT INTO ${table} ( ${columns.join(', ')} ) VALUES (?)`;
  return await db.query(sql, object);
};

CategoryModel.getCategory = async () => {
  const sql = `SELECT * FROM ${table}`;
  return await db.query(sql);
};

CategoryModel.updateCategory = async (id, dataOBJ) => {
  const data = Object.values(dataOBJ);
  const sql = `UPDATE ${table} SET ${columns.join('= ?, ')}=? WHERE ID = ${id}`;
  return await db.query(sql, data);
};

CategoryModel.deleteCategory = async (id) => {
  const sql = `DELETE FROM ${table} WHERE ID = ${id}`;
  return await db.query(sql);
};

module.exports = CategoryModel;
