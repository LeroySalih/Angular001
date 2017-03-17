import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../router.animations";

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}

})
export class PageRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
