import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { credentials } from 'src/assets/credentials';

const { spotifyClientId, spotifyClientSecret } = credentials;

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit{

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        const authorizationCode = params['code'];
        const state = params['state'];

        // Acces tokken
        const tokenEndpoint = 'https://accounts.spotify.com/api/token';
        const requestBody = {
          grant_type: 'authorization_code',
          code: authorizationCode,
          redirect_uri: window.location.origin + '/callback',
          client_id: spotifyClientId,
          client_secret: spotifyClientSecret
        };

        this.http.post(tokenEndpoint, requestBody).subscribe((response: Object) => {
          if ('access_token' in response) {
            const accessToken = response['access_token'] as string;
            console.log(accessToken);
          }
          if ('expires_in' in response) {
            const expiresIn = response['expires_in'];
            console.log(expiresIn);
          }
        });
      });
  }
}
