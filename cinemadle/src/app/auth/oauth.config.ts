import { AuthConfig } from "angular-oauth2-oidc";
import { credentials } from "src/assets/credentials";

const { spotifyClientId } = credentials;

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.spotify.com',
  redirectUri: window.location.origin + '/callback',
  clientId: spotifyClientId,
  scope: 'user-read-private user-read-email',
  responseType: 'code',
  showDebugInformation: true
};
