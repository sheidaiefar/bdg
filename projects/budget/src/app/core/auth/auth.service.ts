import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { of as observableOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentialsKey = 'currentUser';

  constructor(private router: Router) {
  }

  isLogin(): boolean {
    // return true;
    return !!(localStorage.getItem(this.credentialsKey) || sessionStorage.getItem(this.credentialsKey));
  }

  logout(): Observable<boolean> {
    sessionStorage.removeItem(this.credentialsKey);
    localStorage.removeItem(this.credentialsKey);
    return observableOf(true);
  }

  getToken(): string {
    const savedCredentials = this.getUser();
    return savedCredentials?.token;
  }

  private getUser(): any {
    const savedCredentials = sessionStorage.getItem(this.credentialsKey) || localStorage.getItem(this.credentialsKey);
    return JSON.parse(savedCredentials as string);
  }

}
