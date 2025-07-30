import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  template: `
    <div class="login-box">
      <h2>Авторизация</h2>
      <input [(ngModel)]="username" placeholder="Логин">
      <input [(ngModel)]="password" type="password" placeholder="Пароль">
      <button (click)="login()">Войти</button>
      <p *ngIf="error" class="error">{{error}}</p>
    </div>
  `,
  styles: [`
    .login-box {
      max-width: 300px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .error { color: red; }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('admin_auth', 'true');
      this.router.navigate(['/admin/orders']);
    } else {
      this.error = 'Неверные данные';
    }
  }
}