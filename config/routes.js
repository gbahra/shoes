var express = require('express');
var router = express.Router();
var shoesController = require('../controllers/shoes');
var usersController = require('../controllers/users');
var sessionsController = require('../controllers/sessions');
var shoesApiController = require('../controllers/api/shoes');

 // sessions
 router.route('/sessions')
      .post(sessionsController.create)
      .delete(sessionsController.delete);

 router.route('/sessions/new')
      .get(sessionsController.new);

// users
 router.route('/users/shoeRack')
      .get(usersController.index);

 router.route('/users')
      .post(usersController.create);

 router.route('/users/new')
      .get(usersController.new);

 router.route('users/:id')
      .put(usersController.update);

 // API section
 router.route('/api/shoes')
   .get(shoesApiController.index)
   .post(shoesApiController.create);

 router.route('/api/shoes/:id')
   .get(shoesApiController.show)
   .put(shoesApiController.update)
   .delete(shoesApiController.delete);

// shoes
router.route('/')
      .get(shoesController.index)
      .post(shoesController.create);

router.route('/new')
      .get(shoesController.new)

router.route('/:id')
      .get(shoesController.show)
      .put(shoesController.update)
      .delete(shoesController.delete);

router.route('/:id/edit')
      .get(shoesController.edit);

module.exports = router;
