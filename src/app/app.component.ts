import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  names:string[] = ['leroy', 'george', 'salih'];

  onUserAdded(name:string){
    console.log(`Received: ${name}`);
    this.names.push(name)
  }
}
