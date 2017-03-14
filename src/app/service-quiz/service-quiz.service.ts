import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';

@Injectable()
export class QuizService {

  quizUrl:string = "";

  constructor(private http:Http) {
    this.quizUrl = "http://localhost:8082/quizzes"
  }

  getQuizes() {
    return this.http.get(this.quizUrl).map(this.extractData)
  }

  getQuiz(quizId:string) {
    return this.http.get(`${this.quizUrl}/${quizId}`).map(this.extractData)
  }

  createQuiz(classId:string) {
    //noinspection TypeScriptValidateTypes
    return this.http.post(this.quizUrl,{classId:classId})
      .map(this.extractData)
  }

  private extractData(res: Response) {

    let data = res.json();
  //  console.log(`QuizService::extractData received:`, data)
    return data || { };
  }



}