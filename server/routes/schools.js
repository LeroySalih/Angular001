"use strict";
var express = require('express');
var router = express.Router();
const assert = require('assert');
var ObjectId = require ('mongodb').ObjectID

/* GET users listing. */
router.get('/', function(req, res, next) {

  try{
    // Check db is initialised
    var db = req.app.get('db')

    assert (db != null, "db = null, is Mongo running?");

    db.collection('schools')
      .find()
      .toArray()
      .then((result) => {
        console.log('School Server returning:')
        console.log(result);
        res.json(result)
      })
      .catch((err) => {
        console.log(`School:Get / Error: ${err.message}`);
        res.status(500).json({msg:err.message})
      })
  } catch (err) {
    console.log(`School:Get / Error: ${err.message}`);
    res.status(500).json({msg:err.message})
  }

});

router.get('/:schoolId', function (req, res, next){


  try {
    // Get DB Connection
    var db = req.app.get('db')

    // Get Parameter Values
    var schoolId = req.params.schoolId

    // Preflight Assertions
    assert (db != null, "db = null, is Mongo running?");
    assert (schoolId != null || schoolId != "", "no schoolIdProvided");

    // Load Object from DB
    db.collection('schools')
      .find({_id : ObjectId(schoolId) })
      .toArray()
      .then((result) => {
        res.json(result)
      })
  }
  catch (err) {
    console.log(`School:Get /:schoolId Error: ${err.message}`);
    res.status(500).json({msg:err.message})
  }


})

// Create New school
router.post('/', function (req, res, next){

    var name = req.body.name || "not specified";

    var db= req.app.get('db')
    db.collection('schools').insert({name : name})
        .then((result) => {
            res.json(result.ops[0])
        })
        .catch ((err) => {
            res.json(err)
        })


});

// Update School Field
router.post('/:schoolId', function (req, res, next){
    // Check db is initialised
    var db = req.app.get('db')
    var schoolId = req.params.schoolId

    db.collection('schools')
        .findOneAndUpdate({_id : ObjectId(schoolId) },
            req.body
        )
        .then((result) => {
            res.json(result.value)
        })
});

// Remove a School
router.delete('/:schoolId', function (req, res, next){
    // Check db is initialised
    var db = req.app.get('db')
    var schoolId = req.params.schoolId

    db.collection('schools')
        .remove({_id : ObjectId(schoolId)}, (err, result) => {
            res.json(result)
        })
});

router.get('/classes/:classId', function(req, res, next){

    var db = req.app.get('db');


    var classId = req.params.classId;
    console.log('classId', classId);


    db.collection('schools')
        .find({"classes._id":ObjectId(classId)},
          {
            classes: {
              $elemMatch : {_id : ObjectId(classId)}
            }
        })
        .toArray(function (err, docs) {
            console.log(docs)
            res.json(docs[0].classes[0]);
        })


} );

router.get('/classes/:classId/pupils', function(req, res, next){

    var db = req.app.get('db');

    var classId = req.params.classId;

    console.log('classId', classId);

    db.collection('pupils')
        .find({"classId":ObjectId(classId)})
        .toArray(function (err, docs) {
            console.log(docs)
            res.json(docs);
        })


} );

router.delete ('/', function (req, res, next){

    // Check db is initialised
    var db = req.app.get('db')
    var schoolId = req.params.schoolId

    db.collection('schools')
        .remove({}, (err, result) => {
            res.json(result)
        })
})






module.exports = router;
