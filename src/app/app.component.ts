import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyAPIService } from './services/spotifyAPI/spotify-api.service';

import { ITokens } from './common/interfaces/tokens.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  authCode: string;
  tokens: ITokens;

  constructor(
    private route: ActivatedRoute,
    public api: SpotifyAPIService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.code) {
        this.api.getAccessToken(params.code).subscribe(tokenData => {
          this.tokens = tokenData;
        });
      }
    })
  }
}
