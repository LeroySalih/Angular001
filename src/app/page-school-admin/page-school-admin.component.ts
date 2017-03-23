import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-school-admin',
  templateUrl: './page-school-admin.component.html',
  styleUrls: ['./page-school-admin.component.css']
})
export class PageSchoolAdminComponent implements OnInit {

  schoolId:string;

  constructor(private route:ActivatedRoute) {

  }

  ngOnInit() {

    this.route.params.subscribe((params) => {
      console.log('Loading School', params['schoolId'])
    })

  }

}
