import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '@auth/interfaces/auth-data.interface';
import { User } from '@auth/interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User | null = null;
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  registerUser(authData: AuthData): void {
    this.user = {
      email: authData.email,
      password: authData.password,
      userId: Math.round(Math.random() * 10000).toString(),
    };

    this.authSuccess();
  }

  login(authData: AuthData): void {
    this.user = {
      email: authData.email,
      password: authData.password,
    };

    this.authSuccess();
  }

  logout(): void {
    this.user = null;
    this.isLoggedIn.next(false);
  }

  getUser(): any {
    return {
      ...this.user,
    };
  }

  getIsLoggedIn$(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  authSuccess(): void {
    this.isLoggedIn.next(true);
    this.router.navigate(['/training']);
  }
}