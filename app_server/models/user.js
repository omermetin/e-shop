const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    userName: {type: String, reguired: true, unique: true},
    password: {type: String, reguired: true}
},{collection:'Users'});

const User = mongoose.model('User', userSchema);

module.exports = User;