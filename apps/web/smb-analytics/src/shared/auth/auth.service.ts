import { Injectable, Signal, inject, signal } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  User,
  signInWithPopup,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private _currentUser = signal<User | null>(null);
  private _accessToken = signal<string>('');

  public currentUser = this._currentUser.asReadonly() as Signal<User | null>;
  public accessToken = this._accessToken.asReadonly() as Signal<string>;

  constructor() {
    this.auth.onAuthStateChanged((user) => {
      this._currentUser.set(user);
      user?.getIdToken().then((token) => this._accessToken.set(token));
    });
  }

  public async loginWithGoogle() {
    await signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  public async signOut() {
    await this.auth.signOut();
  }
}
