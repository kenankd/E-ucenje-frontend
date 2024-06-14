import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  getQuizzes(): Observable<any> {
    return this.http.get('http://localhost:3000/quiz/1');
  }

  getQuizContent(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/quiz/${id}/content`);
  }

  submitQuiz(quizId: number, userId: number,  answers: any[]): Observable<any> {
    return this.http.post(`http://localhost:3000/quiz/${quizId}/user/${userId}/submit`, { answers });
  }
}

