import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Class} from "../models/class";

@Component({
  selector: 'app-class-link',
  templateUrl: './class-link.component.html',
  styleUrls: ['./class-link.component.css']
})
export class ClassLinkComponent implements OnInit {

  @Input() class:Class;
  @Output() onCreateQuiz:EventEmitter<Class> = new EventEmitter<Class>()

  constructor() { }

  ngOnInit() {
  }

  handleCreateQuiz(){
    this.onCreateQuiz.emit(this.class);
  }

}


export class CreateMsg {
  constructor(public classId:string,
              public payload: any)
  {

  }
}
