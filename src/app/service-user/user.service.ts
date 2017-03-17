import { Injectable, Output } from '@angular/core';
import { School }  from '../models/school';

import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from '../models/user'

@Injectable()
export class UserService {

  public currentUser:BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor() {

  }

  loginUser (email:string, password:string){
    this.currentUser.next({
      _id:'qwerty1234',
      email:email,
      isTeacher:true,
      classId : '',
      schoolId:"58be6aab2f1a4a38daa4ca52"
    })
  }
  

}
