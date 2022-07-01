import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from '@auth/interfaces/auth-data.interface';
import { PersistanceService } from '@services/persistance.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastService } from '@services/toast.service';
import { ToastStatus } from '@enums/toast-status.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private router: Router,
    private persistanceService: PersistanceService,
    private authFire: AngularFireAuth,
    private toastService: ToastService,
  ) {}

  registerUser(authData: AuthData): void {
    this.authFire
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.toastService.showInfoMessage(ToastStatus.SUCCESS, 'Sukces', 'Rejestracja przebiegła pomyślnie');
        this.authSuccess();
      })
      .catch((error) => {
        this.toastService.showInfoMessage(ToastStatus.ERROR, 'Błąd', 'Wprowadzono niepoprawne dane');
      });
  }

  login(authData: AuthData): void {
    this.authFire
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        this.toastService.showInfoMessage(ToastStatus.SUCCESS, 'Sukces!', 'Zalogowano pomyślnie');
        this.authSuccess();
      })
      .catch(() => {
        this.toastService.showInfoMessage(ToastStatus.ERROR, 'Błąd', 'Wprowadzono niepoprawne dane');
      });
  }

  logout(): void {
    this.isLoggedIn$.next(false);
    this.persistanceService.set('isLoggedIn', false);
    this.authFire.signOut();
    this.toastService.showInfoMessage(ToastStatus.INFO, '', 'Wylogowano pomyślnie');
  }

  getIsLoggedIn$(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  authSuccess(): void {
    this.isLoggedIn$.next(true);
    this.persistanceService.set('isLoggedIn', true);
    this.router.navigate(['/training']);
    this.isLoggedIn$.next(true);
  }

  getIsLoggedIn(): void {
    const isLoggedIn = this.persistanceService.get('isLoggedIn');
    this.isLoggedIn$.next(isLoggedIn);
  }
}
