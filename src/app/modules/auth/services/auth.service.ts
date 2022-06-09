import { Injectable } from '@angular/core';
import { AuthData } from '@auth/interfaces/auth-data.interface';
import { User } from '@auth/interfaces/user.interface';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User | null = null;
  private isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  registerUser(authData: AuthData): void {
    this.user = {
      email: authData.email,
      password: authData.password,
      userId: Math.round(Math.random() * 10000).toString(),
    };

    this.isLoggedIn.next(true);
  }

  login(authData: AuthData): void {
    this.user = {
      email: authData.email,
      password: authData.password,
    };

    this.isLoggedIn.next(true);
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

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
}
