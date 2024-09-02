import { QuizReviewAnswer } from "./quiz-review-answer.model";

export interface QuizReviewQuestion {
  question: string;
  points: number;
  answers: QuizReviewAnswer[];
}
