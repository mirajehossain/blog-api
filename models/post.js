const db = require('../config/database').connection;

const table = 'post';
const columns = ['title','description','picture','category_id','author','date'];

let PostModel = {};

PostModel.addPost = (dataOBJ,callback)=>{

    let object = Object.values(dataOBJ);
    let sql = "INSERT INTO "+table+ " ("+columns.join(', ') +") VALUES ("+object.join(', ')+")";
    db.query(sql,callback);
};

PostModel.getPost = (callback) =>{

    let sql = "SELECT * FROM "+table;
    db.query(sql,callback)
};

PostModel.updatePost = (id,dataOBJ,callback) =>{

    let data = Object.values(dataOBJ);
    let sql = "UPDATE "+table+" SET "+columns.join("=  "+data.join(", ")+" ")+" WHERE ID = "+id;
    db.query(sql, callback);
};

module.exports = PostModel;