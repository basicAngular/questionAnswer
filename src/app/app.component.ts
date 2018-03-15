import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions = [
    {setup: "1+2 is equal to the given value that is", result: "3", hide: true},
    {setup: "2+2 is equal to the given value that is", result: "4", hide: true},
    {setup: "1+5 is equal to the given value that is", result: "6", hide: true}
  ];

  hideAnswer(question){
     question.hide =!question.hide;
  }
}

