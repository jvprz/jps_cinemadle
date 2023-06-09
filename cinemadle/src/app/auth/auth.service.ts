import { Injectable } from '@angular/core';
import { credentials } from 'src/assets/credentials';
import { v4 as uuidv4 } from 'uuid';

const { spotifyClientId } = credentials;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId = spotifyClientId;
  private redirectUri = window.location.origin + '/callback';
  private scope = 'user-read-private user-read-email';
  private state = uuidv4();

  getAuthorizationUrl(): string {
    const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${this.clientId}&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(this.scope)}&response_type=code&state=${this.state}`;
    return authorizationUrl;
  }
}
