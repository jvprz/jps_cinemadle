import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  // Testing
  clientId = enviroment.spotifyClientId;
  clientSecret = enviroment.spotifyClientSecret;
}
