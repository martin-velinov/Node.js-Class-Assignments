var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');




router.get('/', indexController.index) 
      .get('/create', indexController.createTodo)
      .get('/todo/:id/view', indexController.viewTodo) 
      .get('/todo/:id/edit', indexController.editTodo)
      .post('/', indexController.postCreate)
      .put('/todo/:id', indexController.putEditTodo)
      .delete('/todo/:id', indexController.deleteMethodTodo)
      
module.exports = router;
