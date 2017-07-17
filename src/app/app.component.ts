import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class App {
  title = 'Rate you day!';
  currentDay = new Date().toUTCString();
}
