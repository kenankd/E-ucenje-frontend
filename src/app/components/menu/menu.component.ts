import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private modalService: NgbModal, private router: Router) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  openLogin(){
    this.router.navigate(['login']);
  }
}
