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

    // load user from storage if available.

    console.log(`Attempting to read Current User from Storage`);
    var userData:string = window.localStorage.getItem("CURRENT_USER");
    if (userData)
    {
      var user:User = JSON.parse(window.localStorage.getItem("CURRENT_USER_TOKEN"));

      this.currentUser  = new BehaviorSubject<User>(user);
    } else {
      this.currentUser  = new BehaviorSubject<User>(null);
    }

  }

  loginUser (email:string, password:string){

    return this.http.post(ServerLib.getServerAddress("/users/login"),{email, password})
                      .subscribe((result:any) => {

                        var msg = JSON.parse(result._body)
                        if (msg){

                          window.localStorage.setItem("CURRENT_USER_TOKEN", msg.token)

                        }
                        //var user:User = result.json();
                        //this.currentUser.next(user)

                      })


  }

  logoutUser () {
    window.localStorage.setItem("CURRENT_USER_TOKEN", null)
    this.currentUser.next(null);

  }




}
