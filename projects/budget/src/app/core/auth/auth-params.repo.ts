import {Injectable} from '@angular/core';
import {AuthParams} from '@app/core/auth/model/authParams.model';
import {AuthParamsInterface} from '@app/core/auth/model/auth-params.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthParamsLocalStorageService implements AuthParamsInterface {

  authParamsKey = {currentUser: 'currentUser', userId: 'userId', fullName: 'fullName'};

  constructor() {
  }

  get(): AuthParams | null {
    const item = localStorage.getItem(this.authParamsKey.currentUser);
    if (item) {
      return JSON.parse(item || '');
    }
    return null;
  }

  set(value: any): void {
    localStorage.setItem(this.authParamsKey.currentUser, value.token);
    localStorage.setItem(this.authParamsKey.userId, value.userId);
    localStorage.setItem(this.authParamsKey.fullName, value.fullName);
  }

  remove(keys?: []): void {
    if (keys) {
      keys?.length > 0 ? keys.forEach(key => localStorage.removeItem(key)) : localStorage.removeItem(this.authParamsKey.currentUser);
    }
  }

}
