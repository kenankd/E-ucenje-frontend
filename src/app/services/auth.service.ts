import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth/login';
  private token = 'token';

  // Observable for login status
  private loginStatusSubject: BehaviorSubject<boolean>;
  public loginStatus: Observable<boolean>;


  constructor(private http: HttpClient, private router: Router) {
    const isLoggedIn = !!localStorage.getItem(this.token);
    this.loginStatusSubject = new BehaviorSubject<boolean>(isLoggedIn);
    this.loginStatus = this.loginStatusSubject.asObservable();
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.apiUrl, { username, password })
      .pipe(map(response => {
        if (response.token) {
          localStorage.setItem(this.token, response.token);
          this.loginStatusSubject.next(true);  // Notify observers of successful login
          return this.getDecodedToken();
        }
        this.loginStatusSubject.next(false);  // Notify observers of failed login
        return null;
      }));
  }

  private getDecodedToken(): { id: string; username: string } | null {
    const token = localStorage.getItem(this.token);
    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error('Invalid token', error);
      }
    }
    return null;
  }

  logout() {
    localStorage.removeItem(this.token);
    this.loginStatusSubject.next(false);  // Notify observers of logout
    // Optionally navigate the user to the login page
    this.router.navigate(['/login']);
  }

  getUserInfo() {
    return this.getDecodedToken();
  }
}
