const db = require('../config/database').connection;

const table = 'post';
const columns = ['title','category_id','author','date','description','picture'];

let PostModel = {};

PostModel.addPost = (dataOBJ,callback)=>{
    let object = Object.values(dataOBJ);
    console.log(object);
    let sql = "INSERT INTO "+table+ " ( "+columns.join(", ") +" ) VALUES (?,?,?,?,?,?)";
    db.query(sql, object,callback);
};

PostModel.getPost = (callback) =>{
    let sql = "SELECT post.* , category.title as ctitle FROM "+table +" INNER JOIN category ORDER BY post.id DESC";
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
PostModel.findByID = (id,callback) =>{
    let sql = "SELECT * FROM "+table+" WHERE ID = "+id;
    db.query(sql, callback);
};

PostModel.findByCategory = (id,callback) =>{
    let sql = "SELECT * FROM "+table+" WHERE category_id = "+id;
    db.query(sql, callback);
};

module.exports = PostModel;