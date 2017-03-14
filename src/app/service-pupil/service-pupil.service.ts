import { Injectable } from '@angular/core';
import { School }  from '../models/school';
import {Http, Response, Headers, RequestOptions}          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Score} from "../models/score";

@Injectable()
export class PupilService {

  pupilUrl:string;

  constructor(private http:Http) {
    this.pupilUrl = "http://localhost:8082/pupils"
  }

  getPupils(classId:string){
    return this.http.get(`${this.pupilUrl}/${classId}`).map(this.extractData)
  }

  saveScore(score:Score){
    var url = `${this.pupilUrl}/pupil/${score.pupilId}/score`;
    console.log(url);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    score.level = Number(score.level);
    score.score = Number(score.score);
    
    return this.http.post(url,score, options)
      .map(this.extractData)
  }

  private extractData(res: Response) {

    let data = res.json();
    console.log(`QuizService::extractData received:`, data)
    return data || { };
  }

}
