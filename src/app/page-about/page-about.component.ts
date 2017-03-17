import { Component, OnInit, style, trigger, state, animate, transition } from '@angular/core';
import { routerTransition} from '../router.animations'

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PageAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
