import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  constructor(private authService: AuthService) {}

  login() {
    const authorizationUrl = this.authService.getAuthorizationUrl();
    window.location.href = authorizationUrl;
  }
}
