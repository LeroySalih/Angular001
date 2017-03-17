import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SchoolService} from "../service-school/school.service";
import {School} from "../models/school";

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
  providers: [SchoolService]
})
export class PageHomeComponent implements OnInit {

  pageTitle:string;
  schoolservice:SchoolService;

  schools:School[];

  constructor(route: ActivatedRoute,
              private schoolService:SchoolService) {

    console.log(route.snapshot.data[0].title)
    this.pageTitle = route.snapshot.data[0].title;
    this.schoolService = schoolService;
  }

  ngOnInit() {

    // load schools list
    this.schoolService.getSchools()
      .subscribe(
        (schools) => {
          console.log (`Received Schools`, schools);
          this.schools = schools;
        },
        (err) => {console.log(`Error Received`)},
        () => {console.log(`Completed`)}
      )
      
  }

}
