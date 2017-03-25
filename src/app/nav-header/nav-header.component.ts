import { Component, OnInit, Input } from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  @Input() currentUser : User
  
  constructor() { }

  ngOnInit() {
  }

}
