import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  constructor() {}

  getToken(): any {
    return '';
  }

  logOut(): void {}
}
