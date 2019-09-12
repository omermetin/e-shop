const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const mongoDB = 'mongodb://localhost/eShop';

mongoose.connect("mongodb://localhost:27017/eShop", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
    useFindAndModify: false }, function (err, err) {
        if (console.error()) {
            console.log('mongoose hatasi: ' + err);
        } else {
            console.log('mongoose baglandi: ' + mongoDB);
        }
    });