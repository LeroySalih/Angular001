"use strict";
var express = require('express');
var router = express.Router();
const assert = require('assert');
var ObjectId = require ('mongodb').ObjectID;
var verifyJwt = require('../verifyJwt')

router.use (verifyJwt)

/* GET quizes listing. */
router.get('/:classId', function(req, res, next) {

    // Check db is initialised
    var db = req.app.get('db')
    var classId = req.params.classId

    db.collection('pupils')
        .find({currentClass:ObjectId(classId)})
        .toArray()
        .then((result) => {
            console.log('Pupil Server returning pupils:')
            console.log(result);
            res.json(result)
        })
});

router.get('/pupil/:pupilId', function (req, res, next){
    var db = req.app.get('db')
    var pupilId = req.params.pupilId

    db.collection('pupils').find({_id:ObjectId(pupilId)})
        .toArray()
        .then((result) => {
            console.log('Pupil Server returning pupil')
            console.log(result)
            res.json(result[0])
        })
})


router.post('/pupil/:pupilId/score', function(req, res, next){

    console.log('received save score request')
    var db = req.app.get('db');
    var score = req.body;



    var objUpdate = {};

    // Update level is score == 5
    if (score.score == "5"){
      objUpdate[score.type] = score.level;
    }

    // record new score
    score.created = Date.now();


  var mongoObj = {
    '$push' : {
                score : { '$each' : [score], '$position' : 0}
              }
  }

  if (score.score == "5"){
    var tmpScore = {};
    tmpScore[score.type] = score.level;
    mongoObj['$set'] = tmpScore;
  }


    // Push the score on to the pupil record.
    db.collection('pupils').updateOne(
        {_id:ObjectId(score.pupilId)},
        mongoObj
    ).then (
      (result) => {res.json(score)}
    )




})

router.get('/pupil/:pupilId/score', function(req, res, next){

    res.json({msg:"GET NOT SUPPORTED"})

})



module.exports = router;
