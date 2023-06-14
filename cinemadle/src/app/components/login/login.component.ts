import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-testing',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login() {
    const authorizationUrl = this.authService.getAuthorizationUrl();
    window.location.href = authorizationUrl;
  }
}
