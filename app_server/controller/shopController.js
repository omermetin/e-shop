const path = require('path');


module.exports.index = function(req, res){
    console.log(req.deneme);
    res.sendFile(path.join(__dirname, '../../html/index.html'));
}

module.exports.login = function(req, res){
    res.render('login', {mesaj: ' I m the login controller'});
    /* res.sendFile(path.join(__dirname, '../../html/login.html')); */
}

module.exports.seller = function(req, res){
    res.sendFile(path.join(__dirname, '../../html/seller.html'));
}

module.exports.products = function(req, res){
    const products = ['ev', 'araba', 'bilgisayar']
    res.render('products', {mesaj: ' I m the controller ', products: products});
   /*  res.sendFile(path.join(__dirname, '../../html/products.html')); */
}