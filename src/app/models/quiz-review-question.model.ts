import { QuizReviewAnswer } from "./quiz-review-answer.model";

export interface QuizReviewQuestion {
  question: string;
  answers: QuizReviewAnswer[];
}
