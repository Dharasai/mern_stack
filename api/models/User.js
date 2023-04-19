

const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username:{type: String, required : true, unique : true},
    password:{type: String, required : true},
});


const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;