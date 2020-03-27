const db = require('../config/database');
const knex = require('../db/config/knex');
const table = 'about';
const columns = ['title', 'quotes', 'description'];

const AboutModel = {};

AboutModel.addAbout = async (dataOBJ) => {
  // const object = Object.values(dataOBJ);
  // const sql = `INSERT INTO ${table} ( ${columns.join(', ')} ) VALUES (?,?,?)`;
  // return await db.query(sql, object);
  return await knex('about').insert(dataOBJ);
};

AboutModel.getAbout = async () => {
  // const sql = `SELECT * FROM ${table}`;
  // return await db.query(sql);
  return await knex('about').select();
};

AboutModel.updateAbout = async (id, dataOBJ) => {
  // const data = Object.values(dataOBJ);
  // const sql = `UPDATE ${table} SET ${columns.join('= ?, ')}=? WHERE ID = ${id}`;
  // return await db.query(sql, data);
  return await knex('about').update(dataOBJ).where({ id });
};

AboutModel.deleteAbout = async (id) => {
  // const sql = `DELETE FROM ${table} WHERE ID = ${id}`;
  // return await db.query(sql);
  return await knex('about').delete().where({ id });
};

module.exports = AboutModel;
