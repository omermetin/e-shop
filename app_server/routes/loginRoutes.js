const express = require('express');
const router = express.Router();
const ctrlLogin = require('../controller/loginController');

router.get('/', ctrlLogin.indexGet);
router.post('/', ctrlLogin.indexPost);
router.get('/signup', ctrlLogin.signupGet);
router.post('/signup', ctrlLogin.signupPost);
router.get('/usersList', ctrlLogin.usersList);
router.get('/deleteuser/:userName', ctrlLogin.deleteUser);


module.exports = router;