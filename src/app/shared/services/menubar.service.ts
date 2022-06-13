import { Injectable } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';
import { MenuLinks } from '@constants/menu-links';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MenubarService {
  constructor(private authService: AuthService) {}

  setMenuLinks(isLoggedIn: boolean): MenuItem[] {
    if (isLoggedIn) {
      MenuLinks.authenticatedLinks[1].command = () => this.authService.logout();
      return MenuLinks.authenticatedLinks;
    }

    return MenuLinks.unauthenticatedLinks;
  }
}
