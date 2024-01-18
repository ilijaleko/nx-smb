import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/auth/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'nx-smb-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  auth = inject(AuthService);
  currentUser = this.auth.currentUser;

  constructor() {
    effect(() => {
      // TODO: Remove this after dashboard is implemented
      console.log(this.currentUser()?.email);
    });
  }
}
