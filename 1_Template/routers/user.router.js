const express = require('express');
const controller = require('../controllers/user.controller') // require controller

const router = express.Router(); // sd router

var bodyParser = require('body-parser'); // 2 dòng của body parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



router.get('/',controller.index); // khi đc gọi sẽ gọi thằng controller.index ở trong  ../controllers/user.controller
router.get('/search',controller.search);
router.get('/create',controller.create);
router.post('/create',urlencodedParser,controller.Postcreate);


module.exports = router ; // export ra router