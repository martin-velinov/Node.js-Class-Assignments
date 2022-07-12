var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');




router.get('/', indexController.index) 

      .get('/create', indexController.createUser)
      .get('/user/:id/view', indexController.viewUser) 
      .get('/user/:id/edit', indexController.editUser)
      .post('/', indexController.postCreate)
      .put('/user/:id', indexController.putEditUser)
      .delete('/user/:id', indexController.deleteMethodUser)
      
module.exports = router;
