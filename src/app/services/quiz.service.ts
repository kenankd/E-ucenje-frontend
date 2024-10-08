import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizReview } from '../models/quiz-review.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  getQuizzes(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/quiz/${id}`);
  }

  getQuizContent(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/quiz/${id}/content`);
  }

  createQuiz(quiz: any): Observable<any> {
    return this.http.post('http://localhost:3000/quiz', quiz);
  }

  editQuiz(quiz: any): Observable<any> {
    return this.http.put(`http://localhost:3000/quiz/${quiz.id}`, quiz);
  }

  submitQuiz(quizId: number, userId: number,  answers: any[], time: any): Observable<any> {
    return this.http.post(`http://localhost:3000/quiz/${quizId}/user/${userId}/submit`, { answers, time});
  }

  getQuizReview(id: number, userId: number): Observable<QuizReview> {
    return this.http.get<QuizReview>(`http://localhost:3000/quiz/${id}/user/${userId}/review`);
  }

}

