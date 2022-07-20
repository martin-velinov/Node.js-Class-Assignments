var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');




router.get('/', indexController.index) 

      .get('/create', indexController.createCar)
      .get('/car/:id/view', indexController.viewCar) 
      .get('/car/:id/edit', indexController.editCar)
      .post('/', indexController.postCreate)
      .put('/car/:id', indexController.putEditCar)
      .delete('/car/:id', indexController.deleteCar)
      
      
module.exports = router;
