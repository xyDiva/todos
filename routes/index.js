var express = require('express');
var router = express.Router();

// index
router.get('/', function (req, res) {
    res.render('index');
});

// todo_
router.get('/todo', function (req, res) {
    res.render('todo');
});

// cv
router.get('/cv', function (req, res) {
    res.render('cv');
});

// message
router.get('/message', function (req, res) {
    res.render('message');
});

module.exports = router;
