"use strict";
var express = require('express');
var router = express.Router();
const assert = require('assert');
var ObjectId = require ('mongodb').ObjectID

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

    score.created = Date.now();

    db.collection('pupils').updateOne(
        {_id:ObjectId(score.pupilId)},
        {$push : {
            score : {
                   $each : [score],
                   $position : 0
                }
            }
        }
    )

    var objUpdate = {};
    objUpdate[score.type] = score.score;

    console.log(objUpdate);
    db.collection('pupils').updateOne(
        {_id:ObjectId(score.pupilId)},
        {$set : objUpdate}
    );

})

router.get('/pupil/:pupilId/score', function(req, res, next){
  
    res.json({msg:"GET NOT SUPPORTED"})

})



module.exports = router;
