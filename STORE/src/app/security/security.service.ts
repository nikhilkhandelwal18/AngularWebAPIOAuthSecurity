import { HttpHeaders, HttpClient } from '@angular/common/http';
import { LOGIN_MOCKS } from './login-mocks';
import { AppUserAuth } from './app-user-auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppUser } from './app-user';


const API_URL = 'http://localhost:5000/api/Security/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();

  constructor(private http: HttpClient) { }

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


 return   this.http.post<AppUserAuth>(API_URL + 'login',
    entity, httpOptions).pipe(
      tap(resp => {
        // Use object assign to update the current object
        // NOTE: Don't create a new AppUserAuth object
        //       because that destroys all references to object
        Object.assign(this.securityObject, resp);
        // store token into local storage
        localStorage.setItem('bearerToken', this.securityObject.bearerToken);
      }));
  }

  logout(): void {
    this.resetSecurityObject();
  }
}
