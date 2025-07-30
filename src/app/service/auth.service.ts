import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuth = localStorage.getItem('admin_auth') === 'true';
    if (!isAuth) {
      this.router.navigate(['/admin/login']);
    }
    return isAuth;
  }
}