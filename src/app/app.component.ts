import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import {UserService} from "./service-user/user.service";
import {User} from './models/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  currentUser : User;

  constructor(public userService:UserService){
    //super();
  }

  names:string[] = ['leroy', 'george', 'salih'];

  ngOnInit(){
 //   console.log("App subscribing to currentUser")
    this.userService.currentUser.subscribe(
      (user) => {
      //  console.log("App: new user detected", user);
        this.currentUser = user;

      }
    )
  }

  ngOnDestroy(){
    console.log("App Unsubscribing to currentUser");
    this.userService.currentUser.unsubscribe();
  }
}
