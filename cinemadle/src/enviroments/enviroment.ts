// Import spotify credentials
import { credentials } from "src/assets/credentials";

//Obtain credentials
const { spotifyClientId, spotifyClientSecret } = credentials;

export const enviroment = {
  production: false,
  // Spotify credentials from credentials
  spotifyClientId,
  spotifyClientSecret
};
