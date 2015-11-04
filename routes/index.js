var express = require('express');
var router = express.Router();

// index
router.get('/', function (req, res) {
    res.render('index', {
        title: 'I am index'
    });
});

// home
router.get('/home', function (req, res) {
    res.render('index', {
        title: 'I am home'
    });
});

// todo_
router.get('/todo', function (req, res) {
    res.render('todo');
});

// cv
router.get('/cv', function (req, res) {
    res.render('cv',{
        title:'I am cv'
    });
});

// message
router.get('/message', function (req, res) {
    res.render('message');
});

module.exports = router;
