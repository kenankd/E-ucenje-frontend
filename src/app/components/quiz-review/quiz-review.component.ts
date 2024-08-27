import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-review',
  templateUrl: './quiz-review.component.html',
  styleUrl: './quiz-review.component.css'
})
export class QuizReviewComponent {
  quizTitle = "Sample Quiz";
    quizDate = new Date().toLocaleDateString();
    quizStartedAt = new Date(2024, 4, 7, 10, 0); // Sample start time (May 7, 2024, 10:00 AM)
    quizFinishedAt = new Date(2024, 4, 7, 10, 30); // Sample finish time (May 7, 2024, 10:30 AM)
    quizTimeSpent = "30 minutes"; // Sample time spent
    quizScore = 8; // Sample score
    maximumScore = 10; // Sample maximum score

    quizQuestions = [
      {
        number: 1,
        text: "What is the capital of France?",
        answers: [
          { text: "London", isCorrectAnswer: false },
          { text: "Paris", isCorrectAnswer: true },
          { text: "Berlin", isCorrectAnswer: false },
        ],
      },
      {
        question: "What is the largest planet in our solar system?",
        answers: [
          { text: "Earth", isCorrectAnswer: false },
          { text: "Jupiter", isCorrectAnswer: true },
          { text: "Mars", isCorrectAnswer: false },
        ],
      },
    ];
}
