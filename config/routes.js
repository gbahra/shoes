var express = require('express');
var router = express.Router();
var shoesController = require('../controllers/shoes');
var usersController = require('../controllers/users');
var sessionsController = require('../controllers/sessions');
var shoesApiController = require('../controllers/api/shoes');

// API section
router.route('/api/posts')
  .get(shoesApiController.index)
  .post(shoessApiController.create);

router.route('/api/posts/:id')
  .get(shoesApiController.show)
  .put(shoesApiController.update)
  .delete(shoesApiController.delete);

// users
router.route('/users')
      .post(usersController.create);

router.route('/users/new')
      .get(usersController.new);

// sessions
router.route('/sessions')
      .delete(sessionsController.delete)
      .post(sessionsController.create);

router.route('/sessions/new')
      .get(sessionsController.new);


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
