var express = require('express');
var router = express.Router();

// home
router.get('/', function (req, res) {
    res.render('index',{
        title:'123'
    });
});

// todo_
router.get('/todo', function (req, res) {
    res.render('index');
});

// cv
router.get('/cv', function (req, res) {
    res.render('index');
});

// message
router.get('/message', function (req, res) {
    res.render('index');
});

module.exports = router;