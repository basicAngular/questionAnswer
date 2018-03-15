import { Component,EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  Questions: Question[];
  constructor() {
    this.questions = [
      {question: "1+2 is equal to the given value that is", answer: "3", hide: true},
      {question: "2+2 is equal to the given value that is", answer: "4", hide: true},
      {question: "1+5 is equal to the given value that is", answer: "6", hide: true}
    ];
  }

  hideAnswer(question){
     question.hide =!question.hide;
  }

  @Output() questionCreated = new EventEmitter<question>();

  createQuestion(question: string, answer: string)
  {
    this.questionCreated.emit(new question(question,answer));
  }

}

