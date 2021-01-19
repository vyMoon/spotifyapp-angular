import { Component, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { SpotifyAPIService } from '../../services/spotifyAPI/spotify-api.service';
import { selectTokensLists } from '../../store/selectors/tokens.selector';
import { selectUserList } from 'src/app/store/selectors/user.selector';
import { IAppState } from '../../store/state/app.state';
import { IUser } from 'src/app/common/interfaces/user.interface';
import { ITokens } from '../../common/interfaces/tokens.interface';

import { InsertUser } from '../../store/actions/user.actions';

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
  user = this._store.pipe(select(selectUserList))
  tokens = this._store.pipe(select(selectTokensLists));
  credentials: ICredentials = {
    user: null,
    tokens: null
  }

  constructor(
    private api: SpotifyAPIService,
    private _store: Store<IAppState>,
  ) { }

  ngOnInit(): void {
    this.tokens.subscribe(data => {
      this.credentials.tokens = data;
      this.getUserInformation(data.access_token);
    });
  }

  private getUserInformation(accessToken): void {
    this.api.getUser(accessToken).subscribe(userInformation => {
      this.credentials.user = userInformation;
      this._store.dispatch(new InsertUser(userInformation))
    })
  }

}
