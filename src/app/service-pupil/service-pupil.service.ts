import { Injectable } from '@angular/core';
import { School }  from '../models/school';
import {Http, Response, Headers, RequestOptions}          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Score} from "../models/score";
import {ServerLib} from "../serverLib";

@Injectable()
export class PupilService {

  pupilUrl:string;

  constructor(private http:Http) {
    this.pupilUrl = ServerLib.getServerAddress("/pupils")
  }

  getJWTOptions (){

    let token = window.localStorage.getItem('CURRENT_USER_TOKEN');
    let headers = new Headers({ 'x-access-token': token });
    let options = new RequestOptions({ headers: headers });

    return options;
  }

  getPupils(classId:string){
    return this.http.get(`${this.pupilUrl}/${classId}`, this.getJWTOptions()).map(this.extractData)
  }
  

  saveScore(score:Score){
    var url = `${this.pupilUrl}/pupil/${score.pupilId}/score`;
    console.log(url);

    let token = window.localStorage.getItem('CURRENT_USER_TOKEN');

    let headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token' : token });
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
