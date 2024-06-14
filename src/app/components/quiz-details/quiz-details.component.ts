import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuizService } from '../../services/quiz.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.css'
})
export class QuizDetailsComponent {
  questions: any[];
  question: any;
  currentQuestionIndex: number = 0;
  answers: any[] = [];
  answer: any;

  constructor(
    public dialogRef: MatDialogRef<QuizDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private quizService: QuizService,
    private notificationService: NotificationService
  ) {
    const id = data.quiz.id;
    this.quizService.getQuizContent(id).subscribe(data => {
      console.log(data);
      this.questions = data.Questions;
      this.question = this.questions[this.currentQuestionIndex]
    });
  }

  selectAnswer(answer: any) {
    this.answer=answer;
  }

  nextQuestion() {
    this.answers.push(this.answer);
    if (this.currentQuestionIndex === this.questions.length - 1) {
      return;
    }
    this.currentQuestionIndex++;
    this.question = this.questions[this.currentQuestionIndex];
  }

  submitQuiz(){
    this.answers.push(this.answer);
    this.quizService.submitQuiz(1,1, this.answers).subscribe({});
    this.dialogRef.close();
    this.notificationService.showSuccess('Quiz submitted successfully');
  }



}
