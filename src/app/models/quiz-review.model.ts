import { QuizReviewQuestion } from './quiz-review-question.model';

export interface QuizReview {
  quizName: string;
  startedOn: Date;
  time: number;
  score: number;
  maxScore: number;
  state: string;
  review: QuizReviewQuestion[];
}
