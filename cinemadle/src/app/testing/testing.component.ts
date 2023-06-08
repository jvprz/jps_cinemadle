import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
import { Song } from 'src/Interfaces/song.interface';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent {
  // Testing
  clientId = enviroment.spotifyClientId;
  clientSecret = enviroment.spotifyClientSecret;

  // First song test
  firstSong!: Song;

}
