import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.css'
})
export class QuizDetailsComponent  {

  constructor(public dialogRef: MatDialogRef<QuizDetailsComponent>) { }
  quiz = {
    "name": "Quiz 1",
  }

}
