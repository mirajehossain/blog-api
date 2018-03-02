const db = require('../config/database').connection;

const table = 'about';
const columns = ['title','quotes','description'];

let AboutModel = {};

AboutModel.addAbout = (dataOBJ,callback)=>{
    let object = Object.values(dataOBJ);
    let sql = "INSERT INTO "+table+ " ( "+columns.join(", ") +" ) VALUES (?,?,?)";
    db.query(sql, object,callback);
};

AboutModel.getAbout = (callback) =>{
    let sql = "SELECT * FROM "+table;
    db.query(sql,callback)
};

AboutModel.updateAbout = (id,dataOBJ,callback) =>{
    let data = Object.values(dataOBJ);
    let sql = "UPDATE "+table+" SET "+columns.join("= ?, ")+"=? WHERE ID = "+id;
    db.query(sql,data, callback);
};

AboutModel.deleteAbout = (id,callback) =>{
    let sql = "DELETE FROM "+table+" WHERE ID = "+id;
    db.query(sql, callback);
};

module.exports = AboutModel;