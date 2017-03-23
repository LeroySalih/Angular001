import { Injectable, Output } from '@angular/core';
import { School }  from '../models/school';

import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from '../models/user'

import {ServerLib} from '../serverLib';

@Injectable()
export class UserService {

  public currentUser:BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(public http: Http) {

  }

  loginUser (email:string, password:string){


      console.log(window.location);
      return this.http.post(ServerLib.getServerAddress("/users/login"),{email, password})
                      .subscribe((result:Response) => {

                        console.log('Users Service login:', result.json());

                        this.currentUser.next(result.json())

                      })


  }

  logoutUser () {
    
      this.currentUser.next(null);

  }




}
