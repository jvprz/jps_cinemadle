import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  constructor(private oauthService: OAuthService) {}

  login() {
    console.log(this.oauthService);
    this.oauthService.initImplicitFlow();
  }
}
