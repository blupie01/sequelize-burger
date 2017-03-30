var express = require('express');
var models = require('../models');
var router = express.Router();

// Routes
// Get all information from database and put on screen
router.get('/', function(req, res) {
	models.Burger.findAll({
	}).then(function(burgers) {
		res.render('index', {
			burger: burgers
		});
	});
});

// Post new burger to table
router.post('/', function(req, res) {
	models.Burger.create({
		burger_name: req.body.burger_name
	}).then(function(burgers) {
		res.redirect('/');
	});
});

// Update the burger to devoured with PUT
router.put('/devour/:id', function(req, res) {
	models.Burger.update({
		devoured: true
	}, {
		where: {id: req.params.id}
	}).then(function(burgers) {
		res.redirect('/');
	});
});

router.put('/regurgitate/:id', function(req, res) {
	models.Burger.update({
		devoured: false
	}, {
		where: {id: req.params.id}
	}).then(function(burgers) {
		res.redirect('/');
	});
});

module.exports = router;