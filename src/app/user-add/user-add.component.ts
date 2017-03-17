import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  @Output() onAddUser = new EventEmitter<string>();

  constructor(private logger:LoggerService) { }

  ngOnInit() {
    this.logger.log("in ngInit ")
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value}`);
    this.onAddUser.emit(title.value)
    return false; }

}
