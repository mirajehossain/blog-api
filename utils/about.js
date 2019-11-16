const db = require('../config/database');

const table = 'about';
const columns = ['title', 'quotes', 'description'];

const AboutModel = {};

AboutModel.addAbout = async (dataOBJ) => {
  const object = Object.values(dataOBJ);
  const sql = `INSERT INTO ${table} ( ${columns.join(', ')} ) VALUES (?,?,?)`;
  return await db.query(sql, object);
};

AboutModel.getAbout = async () => {
  const sql = `SELECT * FROM ${table}`;
  return await db.query(sql);
};

AboutModel.updateAbout = async (id, dataOBJ) => {
  const data = Object.values(dataOBJ);
  const sql = `UPDATE ${table} SET ${columns.join('= ?, ')}=? WHERE ID = ${id}`;
  return await db.query(sql, data);
};

AboutModel.deleteAbout = async (id) => {
  const sql = `DELETE FROM ${table} WHERE ID = ${id}`;
  return await db.query(sql);
};

module.exports = AboutModel;
