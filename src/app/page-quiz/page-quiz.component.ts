import { Component, OnInit, OnDestroy, trigger, state, style, transition, animate  } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../service-quiz/service-quiz.service";
import {PupilService} from '../service-pupil/service-pupil.service';


import {Quiz} from "../models/quiz";
import {Pupil} from "../models/pupil";
import {Score} from "../models/score";
import {routerTransition} from "../router.animations";




@Component({
  selector: 'app-page-quiz',
  templateUrl: './page-quiz.component.html',
  styleUrls: ['./page-quiz.component.css'],
  providers : [QuizService, PupilService],
  animations : [
    routerTransition(),
    trigger('showQuestions', [
      state ('hide', style ({transform: 'translateX(100%)', opacity : 0})),
      state ('show', style({ opacity : 1})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition ('hide => show', animate ('500ms ease-in')),
      transition ('show => hide', animate ('500ms ease-in')),

    ])
  ],
  host: {'[@routerTransition]': ''}
})
export class PageQuizComponent implements OnInit, OnDestroy {

  score:Score;

  quizId:string = "Not Set";
  schoolId:string = "Not Set";
  quiz:Quiz = null;
  showQuestions : string = "hide";
  showAnswers: string = "hide";
  interval: any;

  time:Date = new Date((0 * 60 * 1000) + (5 * 1000));

  pupils:Pupil[] = [];

  constructor(private router : Router,
              private route: ActivatedRoute,
              private quizService:QuizService,
              private pupilsService:PupilService
  ) {

    this.score = new Score();
    this.handleShowAnswers = this.handleShowAnswers.bind(this)
    this.handleShowQuestions = this.handleShowQuestions.bind(this)
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);


  }

  ngOnInit() {

    this.route.params.subscribe(
      (params) => {
      //  console.log('QuizId: ', params['quizId']);
        this.quizId = params['quizId'];
        this.schoolId = params['schoolId'];
        console.log(`School Id: ${this.schoolId}`)
        // Load The quiz
        this.quizService.getQuiz(this.quizId)
          .subscribe(
            (result) => {
          //    console.log(`PageQuizComponent:: received:}`, result[0])
              this.quiz =result[0];


                this.showQuestions = 'show';



            }
          )

      },
      (err) => {},
      () => {}
    )
  }

  ngOnDestroy(){
    this.stopTimer()
  }

  handleShowQuestions(){
    this.showQuestions = (this.showQuestions == "show") ? "hide" : "show";
  }

  handleShowAnswers(){
    this.showAnswers = (this.showAnswers == "show") ? "hide" : "show";
  }

  handleBackToSchool(){
    this.router.navigate(['/school', this.schoolId])
  }

  handleGoToScores(){
    this.router.navigate(['/scores', this.quizId, {classId:this.quiz.classId}])
  }

  getTime(){
    let mins:string =  (this.time.getMinutes() < 10) ? '0' + this.time.getMinutes() : this.time.getMinutes().toString();
    let secs:string =  (this.time.getSeconds() < 10) ? '0' + this.time.getSeconds() : this.time.getSeconds().toString();

    return `${mins}:${secs}`
  }

  startTimer(){
    this.interval = setInterval (()=>{

      if (this.time.getMinutes() == 0 && this.time.getSeconds() ==0)
      {
        this.stopTimer()
        console.log("Boom...")
      } else {
        console.log(`The time is ${this.time.getMinutes()}:${this.time.getSeconds()}` )
        this.time.setSeconds(this.time.getSeconds() - 1)
      }

    }, 1000)
  }

  stopTimer(){
    if (this.interval)
    {
      clearInterval(this.interval);
      this.interval = null;
    }

  }



}
