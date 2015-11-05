var express = require('express');
var router = express.Router();

// home
router.get('/', function (req, res) {
    res.render('index', {
        title: 'D-HOME'
    });
});

// todo_
router.get('/todo', function (req, res) {
    res.render('todo', {
        title: 'D-TODO'
    });
});

// cv
router.get('/cv', function (req, res) {
    res.render('cv', {
        title: 'D-CV'
    });
});

// message
router.get('/message', function (req, res) {
    res.render('message', {
        title: 'D-MESSAGE'
    });
});

module.exports = router;

