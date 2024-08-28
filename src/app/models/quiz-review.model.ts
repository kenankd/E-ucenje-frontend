import { QuizReviewQuestion } from './quiz-review-question.model';

export interface QuizReview {
  quizName: string;
  startedOn: Date;
  review: QuizReviewQuestion[];
}
