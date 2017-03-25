import {Component, OnInit, Input, trigger, style, state, transition, animate, Optional} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {SchoolService} from "../service-school/school.service";
import {QuizService} from "../service-quiz/service-quiz.service";

import {CreateMsg} from '../class-link/class-link.component'
import {School} from "../models/school";
import {routerTransition} from "../router.animations";

import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
  template: `
    <p>This is a dialog</p>
    <form #f="ngForm" (ngSubmit)="dialogRef.close({payload: f.value}); false;">
    <p>
      <md-select placeholder="level" name="level" #level ngModel>
        <md-option [value]="4">Level 4</md-option>
        <md-option [value]="5">Level 5</md-option>
        <md-option [value]="6">Level 6</md-option>
      </md-select>
    <md-slide-toggle value="true" #additon name="addition" ngModel>Addition</md-slide-toggle>
    <md-slide-toggle value="true" name="subtraction" ngModel>Subtraction</md-slide-toggle>
    <md-slide-toggle value="true" name="multiplication" ngModel>Multiplication</md-slide-toggle>
    <md-slide-toggle value="true" name="division" ngModel>Division</md-slide-toggle>
  
    </p>
    <p> 
      <button md-button (click)="dialogRef.close({level: f.value}); false;">Close</button>
       <button md-button (click)="dialogRef.close(null)">Cancel</button>
    </p>
    </form>
    
  `,
})
export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}

@Component({
  selector: 'app-page-school',
  templateUrl: './page-school.component.html',
  styleUrls: ['./page-school.component.css'],

  providers: [SchoolService, QuizService ],
  animations: [routerTransition()],

  host: {'[@routerTransition]': ''}
})
export class PageSchoolComponent implements OnInit {

  school : School;
  selectedOption: string;

  constructor( private router:Router,
               private route: ActivatedRoute,
               private schoolService : SchoolService,
               private quizService : QuizService,
               private dialog: MdDialog

  ) {
    this.onCreateQuiz = this.onCreateQuiz.bind(this);

  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogContent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`DlgResult: `, result)
      this.selectedOption = result;
    });
  }

  onCreateQuiz(msg:CreateMsg){
 //   console.log('Creating Quiz for classId ', msg.classId)

      this.quizService.createQuiz(msg)
        .subscribe((result) =>
        {
          //       console.log(`Quiz ID: ${result._id} returned`);
          this.router.navigate(['/quiz',
            result["_id"],
            {schoolId: this.school["_id"]}]);
        })

    //});


  }


  ngOnInit() {
    this.route.params
      .subscribe(params => {
  //      console.log(`Receieved Params: ${params['schoolId']}`);

        this.schoolService.getSchool(params['schoolId'])
          .subscribe(

            (data) => {
   //           console.log (`Assigning ${data[0]} to this.school`)
              console.log(`School received:`,data)
              this.school = data[0]}
          )

      })

  }

}
