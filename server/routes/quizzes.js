"use strict";
var express = require('express');
var router = express.Router();
const assert = require('assert');
var ObjectId = require ('mongodb').ObjectID

/* GET quizes listing. */
router.get('/', function(req, res, next) {

    // Check db is initialised
    var db = req.app.get('db')

    db.collection('quizzes')
        .find()
        .toArray()
        .then((result) => {
            console.log('School Server returning quizes:')
            console.log(result);
            res.json(result)
        })
});

router.get('/:quizId', function(req, res, next){

    // Check db is initialised
    var db = req.app.get('db')
    var quizId = req.params.quizId

    db.collection('quizzes')
        .find({_id : ObjectId(quizId) })
        .toArray()
        .then((result) => {
            if (result.length == 0){
                console.log("Quiz Server returning No Results")
            }
            res.json(result)
        })
});

// Create a quiz for a class
router.post('/', function (req, res, next){

    var db = req.app.get('db')
    var classId = req.body.classId;
    console.log({msg:`Creating Quiz for `, payload : req.body})


    db.collection('quizzes').insert(newQuiz(classId, req.body.payload))
        .then((result) => {
            res.json( result.ops[0]);
        })

});

function additionQuestion (stars) {
    var newQuestion = {question:`Not Set`, answer:-99}

    //console.log(`Creating an addition question for ${stars} stars`)
    let a = 0, b = 0, answer =0;

    switch (stars)
    {
        case 1 :
            a = Number(Math.random() * 100).toFixed(0);
            b = Number(Math.random() * 100).toFixed(0);
            answer = Number(Number(a) + Number(b)).toFixed(0);

            newQuestion =  {a, b, answer, question: `${a} + ${b} =`, }
            break;

        case 2 :
            a = Number(Math.random() * 100).toFixed(1);
            b = Number(Math.random() * 100).toFixed(1);
            answer = Number(Number(a) + Number(b)).toFixed(1);

            newQuestion =  {a, b, answer, question: `${a} + ${b} =`, }

        case 3 :
            a = Number(Math.random() * 100).toFixed(2);
            b = Number(Math.random() * 100).toFixed(2);
            answer = Number(Number(a) + Number(b)).toFixed(2);

            newQuestion =  {a, b, answer, question: `${a} + ${b} =`, }

        default :
            console.log(`Addition Question, Unknown Level, ${stars}`)
            break
    }
    return newQuestion;
}

function subtractionQuestion (stars) {

    console.log(`Creating an subtraction question for ${stars} stars`)

    let a = 0, b = 0, answer = 0;

    var newQuestion = {question:`Not Set`, answer:-99}

    switch (stars)
    {
        case 1 :
            a = 50 + Number(Number(Math.random() * 50).toFixed(0))
            b = Number(Math.random() * 50).toFixed(0)

            answer = Number(Number(a) - Number(b)).toFixed(0);

            newQuestion =  {a, b, answer, question: `${a} - ${b} =`, }
            break;

        case 2 :
            a = Number(50 + (Math.random() * 50)).toFixed(2)
            b = Number(Math.random() * 50).toFixed(2)

            answer = Number(Number(a) - Number(b)).toFixed(2);

            newQuestion =  {a, b, answer, question: `${a} - ${b} =`, }
            break;

        case 3 :
            a = Number(Number(Math.random() * 50).toFixed(2))
            b = Number(Math.random() * 50).toFixed(2)

            answer = Number(Number(a) - Number(b)).toFixed(2);

            newQuestion =  {a, b, answer, question: `${a} - ${b} =`, }
            break;

        default :
            console.log(`Subtraction Question, Unknown Level, ${stars}`)
            break
    }
    return newQuestion;
}

function multiplicationQuestion (stars) {

    let a = 0, b = 0, answer = 0;

    var newQuestion = {question:`Not Set`, answer:-99}

    switch (stars)
    {
        case 1 :
            a = Number(Math.random() * 10).toFixed(0)
            b = Number(Math.random() * 10).toFixed(0)

            answer = Number(a) * Number(b);

            newQuestion =  {a, b, answer, question: `${a} x ${b} =`, }
            break;

        case 2 :
            a = Number(Math.random() * 10).toFixed(1)
            b = Number(Math.random() * 10).toFixed(1)

            answer = Number(Number(a) * Number(b)).toFixed(2);

            newQuestion =  {a, b, answer, question: `${a} x ${b} =`, }
            break;

        case 3 :
            a = Number(Math.random() * 10).toFixed(2)
            b = Number(Math.random() * 10).toFixed(2)

            answer = Number(Number(a) * Number(b)).toFixed(4);

            newQuestion =  {a, b, answer, question: `${a} x ${b} =`, }
            break;
        default :
            break
    }
    return newQuestion;
}

function divisionQuestion (stars) {

    let a = 0, b = 0, answer =0;

    var newQuestion = {question:`Not Set`, answer:-99}

    switch (stars)
    {
        case 1 :

            // result is integer in the range 4-9

            answer = 4 + Math.ceil(Math.random() * 5)
            b = 4 + Math.ceil(Math.random() * 5)
            a = answer * b;
            newQuestion =  {a, b, answer, question: `${a} ÷ ${b} =`, }

            break;

        case 2 :

            answer = 11 + Math.ceil(Math.random() * 88)

            b = 4 + Math.ceil(Math.random() * 5)

            a = answer * b;

            newQuestion =  {a, b, answer, question: `${a} ÷ ${b} =`, }
            break;

        case 3 :

            // result is integer in the range 1.1-9.9

            answer = Number((11 + Math.ceil(Math.random() * 88))/10).toPrecision(2)

            b = Number((4 + Math.ceil(Math.random() * 5))/10).toPrecision(2)

            a = Number((answer * b)/10).toPrecision(2);

            newQuestion =  {a, b, answer, question: `${a} ÷ ${b} =`, }
            break;


        default :
            break
    }
    return newQuestion;
}

function newQuiz(classId, options){
    var newQuiz = {}

    newQuiz.created = Date.now();
    newQuiz.classId = classId;
    
    newQuiz.starLevels = [];

    var stars = 1

    for (var stars = 1; stars <=3; stars++){

        var starLevel = {
            stars : stars,
            additionQuestions : [],
            subtractionQuestions : [],
            multiplicationQuestions : [],
            divisionQuestions : []
        }

        if (options.addition == true){
            for (var i = 0; i < 5; i++){
                starLevel.additionQuestions.push(additionQuestion(stars))
            }
        }

        if (options.subtraction){
            for (var i = 0; i < 5; i++){
                starLevel.subtractionQuestions.push(subtractionQuestion(stars))
            }
        }

        if (options.multiplication){
            for (var i = 0; i < 5; i++){
                starLevel.multiplicationQuestions.push(multiplicationQuestion(stars))
            }
        }

        if(options.division){
            for (var i = 0; i < 5; i++){
                starLevel.divisionQuestions.push(divisionQuestion(stars))
            }
        }


        newQuiz.starLevels.push(starLevel);
    }

    return newQuiz;
}

module.exports = router;