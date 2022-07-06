var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');



// ROUTE PARAMETER

router.get('/', indexController.index) 
      .get('/hehe', indexController.hehe) 
      .get('/user/:id/view', indexController.viewUser) 
      .get('/create', indexController.create)
      .post('/', indexController.postCreate)

module.exports = router;