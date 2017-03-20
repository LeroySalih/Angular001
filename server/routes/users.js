"use strict";
var express = require('express');
var router = express.Router();
var crypto =require('crypto');

var assert = require ('assert');

/* GET users listing. */
router.get('/', function(req, res, next) {

  try {
    // Get DB Connection
    var db = req.app.get('db')

    // Preflight Assertions
    assert (db != null, "db = null, is Mongo running?");

    // Load Object from DB
    db.collection('users')
      .find({ })
      .toArray()
      .then((result) => {
        res.json(result)
      })
  }
  catch (err) {
    console.log(`Users:Get / Error: ${err.message}`);
    res.status(500).json({msg:err.message})
  }
});

router.post ('/login', function (req, res, next){

  try {



    // Get DB Connection
    var db = req.app.get('db')
    // Preflight Assertions
    assert (db != null, "db = null, is Mongo running?");

    var email = req.body.email;
    var password = req.body.password;

    assert (email != "" || email != null, "Invalid ")
    assert (password != "" || password != null, "Invalid ")

    console.log("Attempting Login....", email, password)

    db.collection('users')
      .findOne({email, password: encrypt(password)})
      .then((result) => {
        if (result){
          delete result.password
        }

        res.json(result);
      })


  }
  catch (err) {
    res.status(500);
    res.json({err:err.message});
  }
});

router.post('/', function (req, res, next){
  try {
    let algorithm = 'aes-256-ctr';

    // Get DB Connection
    var db = req.app.get('db')

    var email = req.body.email;
    var password = req.body.password;

    var fName = req.body.fName || "";
    var lName = req.body.lName || "";
    var schoolName = req.body.schoolName || "";
    var schoolId = "";

    assert (email != null || email != "", "Users post/ invalid email");
    assert (password != null || password != "", "Users post/ invalid password");

    // Preflight Assertions
    assert (db != null, "db = null, is Mongo running?");

    // first add the school

    db.collection('schools').insertOne({schoolName})
      .then((school) => {

        schoolId = school.insertedId;

        return db.collection('users').insertOne({
          email,
          password: encrypt(password),
          fName, lName,
          schoolId
        });
      })
      .then((result) => {
        console.log(result);
        res.json({
          email,
          fName, lName,
          schoolId ,
          _id : result.insertedId})
      });
  }
  catch (err) {
    console.log(`Users:Get / Error: ${err.message}`);
    res.status(500).json({msg:err.message})
  }
})

function encrypt(text){
  var algorithm = 'aes-256-ctr';
  var salt = process.env.SALT || "testSalt";

  var cipher = crypto.createCipher(algorithm,text  + salt)
  var crypted = cipher.update(text,'utf16','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

module.exports = router;
