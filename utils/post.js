const db = require('../config/database');

const table = 'post';
// const columns = ['title','category_id','author','date','description','picture'];
const columns = ['title', 'category_id', 'author', 'date', 'description'];

const PostModel = {};

PostModel.addPost = (dataOBJ, callback) => {
  const object = Object.values(dataOBJ);
  console.log(object);
  const sql = `INSERT INTO ${table} ( ${columns.join(', ')} ) VALUES (?,?,?,?,?)`;
  db.query(sql, object, callback);
};

PostModel.getPost = async () => {
  try {
    const sql = `SELECT post.* , category.title as ctitle FROM ${table} LEFT JOIN category on post.category_id = category.id ORDER BY post.id DESC`;
    return await db.query(sql);
  } catch (e) {
    return e;
  }
};

PostModel.updatePost = async (id, dataOBJ) => {
  const data = Object.values(dataOBJ);
  const sql = `UPDATE ${table} SET ${columns.join('= ?, ')} WHERE ID = ${id}`;
  return await db.query(sql, data);
};

PostModel.deletePost = async (id) => {
  const sql = `DELETE FROM ${table} WHERE ID = ${id}`;
  return await db.query(sql);
};

PostModel.searchPost = async (string) => {
  const sql = `SELECT post.*, category.title as ctitle FROM ${table} INNER JOIN category ON post.category_id = category.id WHERE post.title LIKE '${string}%'`;
  return await db.query(sql);
};
PostModel.findByID = async (id) => {
  const sql = `SELECT post.*, category.title as ctitle FROM ${table} INNER JOIN category ON post.category_id = category.id  WHERE post.ID = ${id}`;
  return await db.query(sql);
};

PostModel.findByCategory = async (id) => {
  const sql = `SELECT post.*, category.title as ctitle FROM ${table} INNER JOIN category WHERE post.category_id = ${id} AND category.id = ${id} ORDER BY id DESC`;
  return await db.query(sql);
};

module.exports = PostModel;
