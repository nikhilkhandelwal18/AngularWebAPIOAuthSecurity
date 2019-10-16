import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from './security.service';
import { AppUserAuth } from './app-user-auth';
import { AppUser } from './app-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  returnUrl: string;

  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  login() {
    this.securityService.login(this.user).subscribe(
      resp => {
        this.securityObject = resp;
        if (this.returnUrl) {
          this.router.navigateByUrl(this.returnUrl);
        }
      }
    );
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

}
