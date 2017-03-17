"use strict";
var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({msg:'Server Responding Correctly'})
});

module.exports = router;
