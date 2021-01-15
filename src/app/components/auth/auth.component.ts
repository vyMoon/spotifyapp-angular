import { Component, Input  } from '@angular/core';
import { SpotifyAPIService } from '../../services/spotifyAPI/spotify-api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  @Input() authLink: string;

  constructor(
    // public api: SpotifyAPIService,
  ) { }

}
