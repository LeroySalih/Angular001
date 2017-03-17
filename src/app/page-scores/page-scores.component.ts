import { Component, OnInit, Input } from '@angular/core';
import {PupilService} from "../service-pupil/service-pupil.service";
import {Pupil} from "../models/pupil";

@Component({
  selector: 'app-page-scores',
  templateUrl: './page-scores.component.html',
  styleUrls: ['./page-scores.component.css']
})
export class PageScoresComponent implements OnInit {

  @Input() quizId:string;
  @Input() classId:string;
  pupils:Pupil[];

  constructor(public pupilsService:PupilService) {

    this.saveForm = this.saveForm.bind(this);
  }

  ngOnInit() {

    // Load Pupils for the class
    this.pupilsService.getPupils(this.classId)
      .subscribe(
        (result) => {
          console.log(`Loading Pupils.`, result);
          this.pupils = result;
        }
      )
  }

  saveForm(score:any){

    score.quizId = this.quizId;
    console.log('Saving Score', score)
    this.pupilsService.saveScore(score).subscribe(
      (result)=> {
        console.log(result)
      }
    )
  }

}
