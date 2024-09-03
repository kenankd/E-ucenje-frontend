import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { QuizRetakeService } from '../../services/quiz-retake.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizReview } from '../../models/quiz-review.model';
import { QuizService } from '../../services/quiz.service';
import { AuthService } from '../../services/auth.service';
import { QuizReviewQuestion } from '../../models/quiz-review-question.model';
import { QuizReviewAnswer } from '../../models/quiz-review-answer.model';

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.css']
})
export class QuizReviewComponent implements OnInit {

  constructor(private location: Location, private quizService: QuizService, private quizRetakeService: QuizRetakeService, private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  quizReview: QuizReview
  quizId = +this.route.snapshot.paramMap.get('id');
  user = this.authService.getUserInfo()

  ngOnInit(): void {

    this.quizService.getQuizReview(this.quizId, +this.user.id).subscribe(data => {
      this.quizReview = data
    })
  }

  finishReview(): void {
    this.location.back()
  }

  retakeQuiz(): void {
    this.quizRetakeService.notifyRetakeQuiz()
    this.router.navigate(["/course/1"])

    //TODO
    //FIX 1 HARDCODED COURSE ID
  }

  isAnswerCorrect(question: QuizReviewQuestion) {
    return question.answers.some(answer => answer.isCorrect && answer.isSelected)
  }

  getCorrectAnswer(question: QuizReviewQuestion): QuizReviewAnswer {
    return question.answers.find(answer => answer.isCorrect && answer.isSelected)
  }

  displayTimeTaken() {
    const mins = this.quizReview.time * 60 % 60
    let secs = 0
    if (mins == 0) {
      secs = this.quizReview.time % 60
    }
    else {
      secs = this.quizReview.time - mins * 60
    }
    return `${mins} mins ${secs} secs`
  }

  displayQuizScore() {
    const percentage = this.quizReview.score / this.quizReview.maxScore * 100
    return `${this.quizReview.score}.00 out of ${this.quizReview.maxScore}.00 (${percentage}%)`
  }

  displayQuestionScore(question: QuizReviewQuestion) {
    if (this.isAnswerCorrect(question)) {
      return `${question.points} out of ${question.points}`
    }
    return `0 out of ${question.points}`
  }
}
