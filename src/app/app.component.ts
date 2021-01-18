import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { IAppState } from './store/state/app.state';
import { selectTokensLists } from './store/selectors/tokens.selector';
import { InsertTokens } from './store/actions/tokens.actions';

import { SpotifyAPIService } from './services/spotifyAPI/spotify-api.service';

import { ITokens } from './common/interfaces/tokens.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  authCode: string;
  tokens: ITokens;

  tok = this._store.pipe(select(selectTokensLists))

  constructor(
    private route: ActivatedRoute,
    public api: SpotifyAPIService,
    private _store: Store<IAppState>,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    console.log(this.tok, '<<< tokens')
    console.log(this._store, '<<< store')
    this.route.queryParams.subscribe(params => {
      if (params.code) {
        this.api.getAccessToken(params.code).subscribe(tokenData => {
          this.tokens = tokenData;
          this._store.dispatch(new InsertTokens(tokenData))
          // console.log(this.tok, '<< with tokens')
          // this.cd.markForCheck();
        });
      }
    })
  }

  ngDoCheck() {
    console.log('do check')
    console.log(this.tok, '<< with tokens')
  }

  ngOnChanges() {
    console.log('on changes')
  }
}
