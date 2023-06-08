import { AuthConfig } from "angular-oauth2-oidc";
import { enviroment } from "src/enviroments/enviroment";

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.spotify.com',
  redirectUri: window.location.origin + '/callback',
  clientId: enviroment.spotifyClientId,
  scope: 'user-read-private user-read-email',
  responseType: 'code',
  showDebugInformation: true
};
