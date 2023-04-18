

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username:{type: String, required : true, min : 4, unique : true},
    password:{type: String, required : true},
    // email: String,
    // age: Number,
    // username: String,
    // password: String,
});


const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;