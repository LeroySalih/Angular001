import { Component, OnInit, Input, trigger, style, state, transition, animate } from '@angular/core';
import { routerTransition} from '../router.animations'

@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PageContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
