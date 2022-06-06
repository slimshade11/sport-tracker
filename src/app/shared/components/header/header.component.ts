import { Component } from '@angular/core';
import { MenuLinks } from '@constants/menu-links';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuLinks: MenuItem[] = MenuLinks;
}
