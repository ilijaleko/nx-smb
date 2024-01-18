import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-smb-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  auth = inject(AuthService);
  router = inject(Router);
  currentUser = this.auth.currentUser;

  constructor() {
    effect(() => {
      if (this.currentUser()) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  signInWithGoogle() {
    this.auth.loginWithGoogle();
  }

  logout() {
    this.auth.signOut();
  }
}
