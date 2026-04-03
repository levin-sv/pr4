const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.registerUser = async (email, password,callback) => {
 const hashedPassword = await bcrypt.hash(password,10);
 userModel.createUser(email, hashedPassword, callback);
//  const match = await bcrypt.compare(password, user.password);
 };

