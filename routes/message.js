var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Message = require('../models/Message.js');

/* GET /api/message listing. */
router.get('/', function (req, res, next) {
    Message.find(function (err, msgs) {
        if (err) return next(err);
        res.json(msgs);
    }).sort({time: -1});
});

/* POST /api/message */
router.post('/', function (req, res, next) {
    Message.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /api/message */
router.delete('/:id', function (req, res, next) {
    Message.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
