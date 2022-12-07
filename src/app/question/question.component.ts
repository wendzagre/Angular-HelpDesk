import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../model/question.model';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
@Input('question')question!:Question;

  constructor() { }

  ngOnInit(): void {
  }

}
