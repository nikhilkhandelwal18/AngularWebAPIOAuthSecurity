import { AppUserAuth } from './security/app-user-auth';
import { SecurityService } from './security/security.service';
import { Component } from '@angular/core';

@Component({
  selector: 'store-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = `Training Company`;
  securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
  }

  logout(): void {
    this.securityService.logout();
  }
}
