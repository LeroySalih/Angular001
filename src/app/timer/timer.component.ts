import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  interval: any;
  time:Date = new Date((0 * 60 * 1000) + (5 * 1000));

  constructor() {
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  ngOnInit() {}

  getTime(){
    let mins:string =  (this.time.getMinutes() < 10) ? '0' + this.time.getMinutes() : this.time.getMinutes().toString();
    let secs:string =  (this.time.getSeconds() < 10) ? '0' + this.time.getSeconds() : this.time.getSeconds().toString();

    return `${mins}:${secs}`
  }

  startTimer(){
    this.interval = setInterval (()=>{

      if (this.time.getMinutes() == 0 && this.time.getSeconds() ==0)
      {
        this.stopTimer()
        console.log("Boom...")
      } else {
        console.log(`The time is ${this.time.getMinutes()}:${this.time.getSeconds()}` )
        this.time.setSeconds(this.time.getSeconds() - 1)
      }

    }, 1000)
  }

  stopTimer(){
    if (this.interval)
    {
      clearInterval(this.interval);
      this.interval = null;
    }

  }


}
