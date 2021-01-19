import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { SpotifyAPIService } from '../../services/spotifyAPI/spotify-api.service';
import { selectTokensLists } from '../../store/selectors/tokens.selector';
import { IAppState } from '../../store/state/app.state';
import { IUser } from 'src/app/common/interfaces/user.interface';
import { ITokens } from '../../common/interfaces/tokens.interface';
import { userInfo } from 'os';

interface ICredentials {
  user: IUser;
  tokens: ITokens;
}

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  // @Input() tokens: ITokens;

  user: IUser;
  tokens = this.store.pipe(select(selectTokensLists));
  credentials: ICredentials = {
    user: null,
    tokens: null
  }

  constructor(
    private api: SpotifyAPIService,
    private store: Store<IAppState>,
  ) { }

  ngOnInit(): void {
    this.tokens.subscribe(data => {
      this.credentials.tokens = data;
      this.getUserInformation(data.access_token);
      console.log(data)
    });
  }

  private getUserInformation(accessToken): void {
    this.api.getUser(accessToken).subscribe(userInformation => {
      console.log(userInformation)
      this.user = userInformation;
      this.credentials.user = userInformation;
    })
  }

}
