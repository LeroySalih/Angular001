import { Injectable } from '@angular/core';
import { School }  from '../models/school';

import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';





@Injectable()
export class SchoolService {

  schools : School[] = []; // [{name : "BISAK"}, {name: "DBGS"}]
  schoolsURL: string = "";

  constructor(private http: Http) {
    this.schoolsURL = "http://localhost:8082/schools"
  }


  getSchools (): Observable<School[]> {
    //noinspection TypeScriptValidateTypes
    return this.http.get(this.schoolsURL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSchool (schoolId: string) : Observable<School[]> {
    //noinspection TypeScriptValidateTypes,TypeScriptValidateTypes
    return this.http.get(`${this.schoolsURL}\\${schoolId}`)
      .map(this.extractData)
      .catch(this.handleError);

  }




  private extractData(res: Response) {

    let data = res.json();
 //   console.log(`schoolService::extractData recieived:`, data)
    return data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
 //   console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
