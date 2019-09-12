const express = require('express');
const router = express.Router();
const ctrlIndex = require('../controller/indexController');

router.get('/', ctrlIndex.index);

module.exports = router;