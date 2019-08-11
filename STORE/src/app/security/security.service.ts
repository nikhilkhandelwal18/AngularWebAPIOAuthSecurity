import { LOGIN_MOCKS } from './login-mocks';
import { AppUserAuth } from './app-user-auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { AppUser } from './app-user';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();

  constructor() { }

  resetSecurityObject(): void {
    this.securityObject.userName = '';
    this.securityObject.bearerToken = '';
    this.securityObject.isAuthenticated = false;
    this.securityObject.canAccessProducts = false;
    this.securityObject.canAddProduct = false;
    this.securityObject.canSaveProduct = false;
    this.securityObject.canAccessCategories = false;
    this.securityObject.canAddCategory = false;
    localStorage.removeItem('bearerToken');
  }

  login(entity: AppUser): Observable<AppUserAuth> {
    // intialize security object
    this.resetSecurityObject();

    // use object assign to update the current object
    // NOTE: Don't create a new AppUserAuth object
    //        because that destroys all references to object
    Object.assign(this.securityObject,
              LOGIN_MOCKS.find(user => user.userName.toLowerCase() === entity.userName.toLowerCase()));

              if (this.securityObject.userName !== '') {
                // store token into local storage
                localStorage.setItem('bearerToken', this.securityObject.bearerToken);
              }
    return of<AppUserAuth>(this.securityObject);
  }

  logout(): void {
    this.resetSecurityObject();
  }
}
