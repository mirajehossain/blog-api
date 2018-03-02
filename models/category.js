const db = require('../config/database').connection;

const table = 'category';
const columns = ['title'];

let CategoryModel = {};

CategoryModel.addCategory = (dataOBJ,callback)=>{
    let object = Object.values(dataOBJ);
    let sql = "INSERT INTO "+table+ " ( "+columns.join(", ") +" ) VALUES (?)";
    db.query(sql, object,callback);
};

CategoryModel.getCategory = (callback) =>{
    let sql = "SELECT * FROM "+table;
    db.query(sql,callback)
};

CategoryModel.updateCategory = (id,dataOBJ,callback) =>{
    let data = Object.values(dataOBJ);
    let sql = "UPDATE "+table+" SET "+columns.join("= ?, ")+"=? WHERE ID = "+id;
    db.query(sql,data, callback);
};

CategoryModel.deleteCategory = (id,callback) =>{
    let sql = "DELETE FROM "+table+" WHERE ID = "+id;
    db.query(sql, callback);
};

module.exports = CategoryModel;