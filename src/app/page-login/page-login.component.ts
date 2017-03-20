import {Component, OnInit, OnDestroy, style, animate, transition, state, trigger} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service-user/user.service";
import {Observable} from "rxjs/Rx";
import {routerTransition} from '../router.animations'

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}

})
export class PageLoginComponent implements OnInit, OnDestroy {



  constructor(public router:Router,
              public userService : UserService) {

    this.onNewUser = this.onNewUser.bind(this);

  }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (user) => {

        console.log("page-login received new user",user)

        if (user){
          console.log("Navigating to : /school ",user.schoolId)
          this.router.navigate(['/school', user.schoolId])
        }

      }
    )
  }

  ngOnDestroy(){
 //   this.userService.currentUser.unsubscribe()
  }

  handleLogin(f) {

    console.log(`Logging in with `, f);
    this.userService.loginUser(f.email, f.password);
  }

  handleRegister(){
    this.router.navigate(['/register'])
  }

  // user service will publish new user...
  onNewUser(){
    //this.router.navigate()
  }



}
