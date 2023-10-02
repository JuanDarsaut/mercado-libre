import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  User: string = '';
  Password: string = '';
  constructor(
    private sessionService: SessionService,
    private router: Router,
  ) {}

  login() {
    if (this.sessionService.validateUser(this.User, this.Password)) {
      this.router.navigate(['/home']);
      return;
    }
    alert('usuario y contraseña incorrectas');
  }
}
