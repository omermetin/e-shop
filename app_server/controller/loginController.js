const User = require('../models/user');

module.exports.indexGet = function (req, res) {
    res.render('login');
}
module.exports.indexPost = function (req, res) {
    console.log(req.body);
    res.render('login', {
        username: req.body.username,
        password: req.body.password
    });
}

module.exports.signupGet = function (req, res) {
    res.render('signup');
}

module.exports.signupPost = function (req, res) {

    const newUser = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password
    });
    newUser.save(function (err) {
        if (err) {
            // console.log(err);
        } else {
            res.redirect('usersList')
        }
    });
}

module.exports.usersList = function (req, res) {
    User.find(function (err, results) {
        // console.log(results);
        res.render('usersList', { User: results });
    })

};

module.exports.deleteUser = function (req, res) {

    User.findOneAndRemove({ userName: req.params.userName }, function (err) {
        if (err) {
            console.log('Error Deleting');
        }
        res.redirect('/login/usersList');
    });

    // res.render(userDelete);
}