var express = require('express');
const url = require('url');
var router = express.Router();
const querystring = require('querystring');


/* GET my data page. */
router.get('/', function(req, res, next) {
    var a = req.query.id;
    res.send('square root applied to: ' + a + " is " + Math.sqrt(a));
});


module.exports = router;