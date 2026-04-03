const db = require('../config/db');

exports.createUser = (email, password, callback) =>{
// const createUser = (email, password, callback) =>{
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(query, [email, password], callback);
}

exports.findUSerByEmail = (email,callback) =>{
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], callback);
}
// module.exports = createUser;
// module.exports = createUser;