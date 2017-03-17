import { Component, OnInit, Input, trigger, state, style, transition, animate  } from '@angular/core';


@Component({
  selector: 'app-star-level-type',
  templateUrl: './star-level-type.component.html',
  styleUrls: ['./star-level-type.component.css'],
  animations : [
    trigger ('showAnswers', [
      state ('show', style ({opacity:1})),
      state ('hide', style ({opacity:0})),
      transition ('hide => show', animate('500ms ease-in')),
      transition ('show => hide', animate('500ms ease-in'))

    ])
  ]
})
export class StarLevelTypeComponent implements OnInit {

  @Input() type:string;
  @Input() questions:Object[];
  @Input() showAnswers:boolean;

  constructor() { }

  ngOnInit() {
 //   console.log("StarLevelTypeComponent::", this.questions)
  }

}
