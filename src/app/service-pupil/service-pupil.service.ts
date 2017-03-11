import { Injectable } from '@angular/core';
import { School }  from '../models/school';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PupilService {

  pupilUrl:string;

  constructor(private http:Http) {
    this.pupilUrl = "http://localhost:8082/pupils"
  }

  getPupils(classId:string){
    return this.http.get(`${this.pupilUrl}/${classId}`).map(this.extractData)
  }

  private extractData(res: Response) {

    let data = res.json();
    console.log(`QuizService::extractData received:`, data)
    return data || { };
  }

}
