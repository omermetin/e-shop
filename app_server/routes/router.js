const express = require('express');
const router = express.Router();
const controller = require('../controller/shopController');

router.use(function(req, res, next){
    req.deneme = 'router cagrildi';
    next();
})
router.get('/', controller.index);
router.get('/index', controller.index);
router.get('/login', controller.login);
router.get('/seller', controller.seller);
router.get('/seller/products', controller.products);

module.exports = router;