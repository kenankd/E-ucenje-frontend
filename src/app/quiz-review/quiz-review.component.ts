import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { QuizRetakeService } from '../services/quiz-retake.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrls: ['./quiz-review.component.css']
})
export class QuizReviewComponent implements OnInit {

  constructor(private location: Location, private quizRetakeService: QuizRetakeService, private router: Router) { }
  examDetails = {
    startedOn: '6 June 2024, 9:45 AM',
    state: 'Passed',
    timeTaken: '3 mins 10 secs',
    grade: '0.80 out of 1.00 (80%)'
  };


  questions = [
    {
      number: 1,
      correct: false,
      mark: 0.00,
      outOf: 0.20,
      text: 'Koju ulogu u proceduri digitalnog potpisivanja ima privatni ključ potpisnika?',
      options: [
        { text: 'Osigurava da je potpis mogao napraviti samo onaj tko ima taj ključ', correct: false },
        { text: 'Osigurava povjerljivost sadržaja', correct: true }
      ],
      correctAnswer: 'Osigurava povjerljivost sadržaja'
    },
    {
      number: 2,
      correct: true,
      mark: 0.20,
      outOf: 0.20,
      text: 'Koja je jedina tajna informacija koja se razmjenjuje između TLS klijenta i servera?',
      options: [
        { text: 'Premaster secret (key)', correct: true },
        { text: 'Privatni ključ servera', correct: false },
        { text: 'Serverski certifikat', correct: false },
        { text: 'Privatni ključ klijenta', correct: false }
      ],
      correctAnswer: 'Premaster secret (key)'
    },
    {
      number: 3,
      correct: true,
      mark: 0.20,
      outOf: 0.20,
      text: 'Koja je jedina tajna informacija koja se razmjenjuje između TLS klijenta i servera?',
      options: [
        { text: 'Premaster secret (key)', correct: true },
        { text: 'Privatni ključ servera', correct: false },
        { text: 'Serverski certifikat', correct: false },
        { text: 'Privatni ključ klijenta', correct: false }
      ],
      correctAnswer: 'Serverski certifikat'
    }
  ];

  

  ngOnInit(): void {
    // You can replace this with a service call to fetch the questions from the backend.
  }

  finishReview() : void {
    this.location.back()
  }

  retakeQuiz() : void {
    this.quizRetakeService.notifyRetakeQuiz()
    this.router.navigate(["/course/1"])
  }
}
