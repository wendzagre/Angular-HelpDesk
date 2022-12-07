import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Question } from '../model/question.model';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
questions!:Question[];
  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
    this.questions=this.dataservice.getQuestion();
  }

}
