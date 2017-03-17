import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Class} from "../models/class";

@Component({
  selector: 'app-class-link',
  templateUrl: './class-link.component.html',
  styleUrls: ['./class-link.component.css']
})
export class ClassLinkComponent implements OnInit {

  @Input() class:Class;
  @Output() onCreateQuiz:EventEmitter<CreateMsg> = new EventEmitter<CreateMsg>()

  constructor() { }

  ngOnInit() {
  }

  handleCreateQuiz(f){
    //console.log('Emitting ClassID', this.class._id);
    //console.log(f);
    let msg = {classId : this.class._id, payload: f}
    this.onCreateQuiz.emit(msg);
  }

}


export class CreateMsg {
  constructor(public classId:string,
              public payload: any)
  {

  }
}
