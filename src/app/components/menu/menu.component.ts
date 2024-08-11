import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string | null = null;


  ngOnInit(): void {
    this.authService.loginStatus.subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        const user = this.authService.getUserInfo();
        this.username = user?.username;
      } else {
        this.username = null;
      }
    });
  }
  constructor(private modalService: NgbModal, private router: Router, private authService: AuthService) { }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  openLogin() {
    this.router.navigate(['login']);
  }

  logout() {
    this.authService.logout();
  }
}
