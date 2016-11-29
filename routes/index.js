var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/show-hospital-details', function(req, res, next) {
    var id = req.param('ID');
    mongodb.connect('mongodb://akshay:akshay@ds111188.mlab.com:11188/hospital-info', function (err, db) {
        assert.equal(null, err);
        db.collection('hospital_data').findOne({"PID": parseInt(id)}, {_id: 0}, function (err, item) {
            res.json(item);
        });
    });
});