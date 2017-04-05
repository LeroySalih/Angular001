import { Injectable } from '@angular/core';
import { School }  from '../models/school';

import {Http, Response, Headers, RequestOptions}          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Class} from "../models/class";


import { ServerLib} from '../serverLib'


@Injectable()
export class SchoolService {

  schools : School[] = []; // [{name : "BISAK"}, {name: "DBGS"}]
  schoolsURL: string = "";

  constructor(private http: Http) {
    this.schoolsURL = ServerLib.getServerAddress("/schools")
    //"http://localhost:8082/schools"
  }

  getJWTOptions (){

    let token = window.localStorage.getItem('CURRENT_USER_TOKEN');
    let headers = new Headers({ 'x-access-token': token });
    let options = new RequestOptions({ headers: headers });

    return options;
  }

  getSchools (): Observable<School[]> {
    //noinspection TypeScriptValidateTypes

    return this.http.get(this.schoolsURL, this.getJWTOptions())
      .map(this.extractData)
      .catch(this.handleError);
  }

  getSchool (schoolId: string) : Observable<School[]> {
    let requestUrl = ServerLib.getServerAddress("/schools/" + schoolId)
    console.log('Requesting: ', requestUrl);

    //noinspection TypeScriptValidateTypes,TypeScriptValidateTypes
    return this.http.get(ServerLib.getServerAddress("/schools/" + schoolId), this.getJWTOptions())
      .map(this.extractData)
      .catch(this.handleError);

  }

  getClass (classId : string) : Observable<Class> {

    return this.http.get(`${this.schoolsURL}\\classes\\${classId}`, this.getJWTOptions())
      .map(this.extractData)
      .catch(this.handleError)
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
