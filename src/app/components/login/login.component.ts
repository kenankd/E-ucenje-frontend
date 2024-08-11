import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Adjust the path as needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router ) { }

  login() {
    this.errorMessage = null; // Reset the error message
    this.authService.login(this.username, this.password).subscribe({
      next: userInfo => {
        if (userInfo) {
          // Redirect to /home page with activated Route
          this.router.navigate(['home']);
        }
      },
      error: error => {
        this.errorMessage = error.error.message;
      }
    });
  };
}

