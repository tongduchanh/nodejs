var express = require('express');
var router = express.Router();
var db = require('../db')
var userController = require('../controllers/user-controller')
/* GET users listing. */

router.get('/', userController.index)

router.get('/create', userController.getCreate)

router.post('/create', userController.postCreate)

module.exports = router;
