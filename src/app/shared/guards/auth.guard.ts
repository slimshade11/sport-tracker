import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { GuardErrorMessage } from '@auth/constants/guard-message';
import { AuthService } from '@auth/services/auth.service';
import { ToastService } from '@services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.getIsLoggedIn$().pipe(
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['/']);
          this.toastService.showInfoMessage(
            GuardErrorMessage.severity,
            GuardErrorMessage.detail,
            GuardErrorMessage.summary,
          );
        }
      }),
    );
  }
}
