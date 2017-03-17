import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import {MaterialModule, MdDialogModule} from '@angular/material';
import 'hammerjs';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

import {LoggerService }from './logger.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAdminComponent } from './page-admin/page-admin.component';
import {PageSchoolComponent} from './page-school/page-school.component';
import { PageRegisterComponent} from './page-register/page-register.component';
import { PageQuizComponent } from './page-quiz/page-quiz.component';
import { ClassLinkComponent } from './class-link/class-link.component';
import { PageLoginComponent } from './page-login/page-login.component'
import {UserService} from "./service-user/user.service";
import { PageScoresComponent } from './page-scores/page-scores.component';
import { StarLevelTypeComponent } from './star-level-type/star-level-type.component';
import { TimerComponent } from './timer/timer.component';




const appRoutes: Routes = [
  { path: 'login', component : PageLoginComponent },
  { path : 'school/:schoolId', component: PageSchoolComponent },
  { path : 'quiz/:quizId', component: PageQuizComponent},
  { path : 'register', component : PageRegisterComponent},
  { path : 'about', component: PageAboutComponent },
  { path : 'contact',      component: PageContactComponent },
  { path: 'home', component: PageHomeComponent, data: [{ title: 'Maths All Stars' }]
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    UserAddComponent,

    PageNotFoundComponent,
    PageHomeComponent,
    PageAboutComponent,
    PageContactComponent,
    PageAdminComponent,
    PageSchoolComponent,
    PageQuizComponent,
    ClassLinkComponent,
    PageLoginComponent,
    PageScoresComponent,
    StarLevelTypeComponent,
    PageRegisterComponent,
    TimerComponent,



  ],

  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdDialogModule,
  ],
  providers: [LoggerService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
