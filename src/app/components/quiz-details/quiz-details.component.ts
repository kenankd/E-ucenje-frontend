import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuizService } from '../../services/quiz.service';
import { NotificationService } from '../../services/notification.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit, OnDestroy {
  questions: any[];
  question: any;
  currentQuestionIndex: number = 0;
  answers: any[] = [];
  answer: any;
  timeLeft: number;
  timerInterval: any;
  data: any;

  constructor(
    private quizService: QuizService,
    private notificationService: NotificationService,
    private router: Router,
    private activeModal: NgbActiveModal,
  ) {

  }

  ngOnInit() {
    console.log(this.data)
    const id = this.data.id;
    this.quizService.getQuizContent(id).subscribe(data => {
      this.questions = data.Questions;
      this.question = this.questions[this.currentQuestionIndex];
    });
    // Postavljanje vremena u sekundama (minuti * 60)
    this.timeLeft = this.data.time * 60;
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  closeQuizModal() {
    this.activeModal.close();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.submitQuiz();
        clearInterval(this.timerInterval);
        this.activeModal.close();
        this.notificationService.showSuccess('Time is up! Quiz is automatically submitted.');
      }
    }, 1000);
  }

  formatTime(time: number): string {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = time % 60;
    return `${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  selectAnswer(answer: any) {
    this.answer = answer;
  }

  nextQuestion() {
    this.answers.push(this.answer);
    if (this.currentQuestionIndex === this.questions.length - 1) {
      return;
    }
    this.currentQuestionIndex++;
    this.question = this.questions[this.currentQuestionIndex];
  }

  submitQuiz() {
    this.answers.push(this.answer);
    console.log(this.data.time, this.timeLeft)
    const timeTaken = this.data.time * 60 - this.timeLeft
    this.quizService.submitQuiz(this.data.id, 1, this.answers, timeTaken).subscribe({
      next: () => {
        this.notificationService.showSuccess('Quiz submitted successfully!');
        this.router.navigate([`/quiz/${this.data.id}/review`, {courseId: this.data.CourseId }]);
      },
      error: () => {
      }
    });
    this.activeModal.close();
  }
}
