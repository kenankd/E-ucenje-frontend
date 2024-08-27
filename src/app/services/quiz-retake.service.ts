import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizRetakeService {
  private retakeQuizSubject = new Subject<void>();
  retakeQuiz$ = this.retakeQuizSubject.asObservable();

  notifyRetakeQuiz(): void {
    this.retakeQuizSubject.next();
  }
}
