import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions}          from '@angular/http';
import {CreateMsg} from "../class-link/class-link.component";
import {ServerLib} from "../serverLib"
@Injectable()
export class QuizService {

  quizUrl:string = "";

  constructor(private http:Http) {
    this.quizUrl = ServerLib.getServerAddress("/quizzes")

  }

  getJWTOptions (){

    let token = window.localStorage.getItem('CURRENT_USER_TOKEN');
    let headers = new Headers({ 'x-access-token': token });
    let options = new RequestOptions({ headers: headers });

    return options;
  }

  getQuizes() {
    return this.http.get(this.quizUrl, this.getJWTOptions()).map(this.extractData)
  }

  getQuiz(quizId:string) {
    return this.http.get(`${this.quizUrl}/${quizId}`, this.getJWTOptions()).map(this.extractData)
  }

  createQuiz(createMsg:CreateMsg) {
    console.log('SeviceQuiz', createMsg)
    //noinspection TypeScriptValidateTypes
    return this.http.post(this.quizUrl,createMsg,this.getJWTOptions())
      .map(this.extractData)
  }

  private extractData(res: Response) {

    let data = res.json();
  //  console.log(`QuizService::extractData received:`, data)
    return data || { };
  }



}
