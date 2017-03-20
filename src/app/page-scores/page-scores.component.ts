import { Component, OnInit, Input } from '@angular/core';
import {PupilService} from "../service-pupil/service-pupil.service";
import {Pupil} from "../models/pupil";
import {ActivatedRoute} from "@angular/router";
import {Class} from "../models/class";
import {SchoolService} from "../service-school/school.service";

@Component({
  selector: 'app-page-scores',
  templateUrl: './page-scores.component.html',
  styleUrls: ['./page-scores.component.css'],
  providers : [PupilService, SchoolService]
})
export class PageScoresComponent implements OnInit {

   quizId:string;
   classId:string;
   class:Class = null;;
   pupils: Map<string, Pupil>;

  constructor(
      private route:ActivatedRoute,
      public  pupilsService:PupilService,
      private schoolsService: SchoolService
  ) {

    this.saveForm = this.saveForm.bind(this);
  }

  getPupils():Array<Pupil>{

    return (this.pupils) ? Array.from(this.pupils.values()) : []
  }

  ngOnInit() {

    this.route.params.subscribe(
      (params) => {
        this.quizId = params['quizId'];
        this.classId = params['classId'];

        console.log(`QuizId: ${this.quizId},  ClassId : ${this.classId}`)
        // Load Pupils for the class
        this.pupilsService.getPupils(this.classId)
          .subscribe(
            (result) => {
              console.log(`Loading Pupils.`, result);

              this.pupils = new Map();

              result.map((pupil)=>{
                this.pupils.set(pupil._id, pupil)
              })

            }
          )

        this.schoolsService.getClass (this.classId)
          .subscribe(
            (result) => {
              console.log(`Loading Class.`, result);

              this.class = result

            }
          )

      }
    )
  }

  saveForm(score:any){

    score.quizId = this.quizId;
    console.log('Saving Score', score)
    this.pupilsService.saveScore(score).subscribe(
      (result)=> {
        console.log(`Saving score received: `, result)

        let pupil = this.pupils.get(result.pupilId)
        if (result.score == "5" )
        {

          pupil[result.type] = result.level;
          console.log("Updating Pupils", result)
          this.pupils.set(result.pupilId, pupil)
        }

      }
    )
  }

}
