import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { GuardErrorMessage } from '@auth/constants/guard-message';
import { AuthService } from '@auth/services/auth.service';
import { MessageService } from 'primeng/api';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.getIsLoggedIn$().pipe(
      tap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate(['/']);
          this.messageService.add(GuardErrorMessage);
        }
      }),
    );
  }
}
