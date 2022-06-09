import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/services/auth.service';
import { DestroyComponent } from '@components/destroy/destroy.component';
import { MenubarService } from '@services/menubar.service';
import { MenuItem } from 'primeng/api';
import { tap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends DestroyComponent implements OnInit {
  menuLinks!: MenuItem[];

  constructor(
    private authService: AuthService,
    private menubarService: MenubarService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.handleLoggedInLinks();
  }

  handleLoggedInLinks(): void {
    this.authService
      .getIsLoggedIn()
      .pipe(
        tap((isLoggedIn) => {
          this.menuLinks = this.menubarService.setMenuLinks(isLoggedIn);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }
}
