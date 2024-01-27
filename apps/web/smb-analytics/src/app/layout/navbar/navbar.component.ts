import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'nx-smb-navbar',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  items = [
    {
      label: 'Dashboard',
      routerLink: ['/'],
    },
    {
      label: 'Shared posts',
      routerLink: ['/shared-posts'],
      navigator: true,
    },
  ];
}
