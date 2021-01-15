import { Component, Input, OnInit } from '@angular/core';

import { SpotifyAPIService } from '../../services/spotifyAPI/spotify-api.service';

import { IUser } from 'src/app/common/interfaces/user.interface';
import { ITokens } from '../../common/interfaces/tokens.interface';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  @Input() tokens: ITokens;

  user: IUser;

  constructor(
    private api: SpotifyAPIService,
  ) { }

  ngOnInit(): void {
    this.api.getUser(this.tokens.access_token).subscribe(userInformation => {
      this.user = userInformation;
    });
  }

}
