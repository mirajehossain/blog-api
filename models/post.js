const db = require('../config/database').connection;

const table = 'post';
const columns = ['title','description','picture','author','date','category_id'];

let PostModel = {};

PostModel.addPost = (dataOBJ,callback)=>{
    let object = Object.values(dataOBJ);
    let sql = "INSERT INTO "+table+ " ( "+columns.join(", ") +" ) VALUES (?,?,?,?,?,?)";
    db.query(sql, object,callback);
};

PostModel.getPost = (callback) =>{
    let sql = "SELECT * FROM "+table;
    db.query(sql,callback)
};

PostModel.updatePost = (id,dataOBJ,callback) =>{
    let data = Object.values(dataOBJ);
    let sql = "UPDATE "+table+" SET "+columns.join("= ?, ")+"=? WHERE ID = "+id;
    db.query(sql,data, callback);
};

PostModel.deletePost = (id,callback) =>{
    let sql = "DELETE FROM "+table+" WHERE ID = "+id;
    db.query(sql, callback);
};

module.exports = PostModel;