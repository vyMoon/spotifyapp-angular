import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ITokens } from '../../common/interfaces/tokens.interface';
import { IUser } from '../../common/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAPIService {
  private appId = '818c23e06b0442dea473b5a767c2ce0e';
  private appKey = 'da7435a2f1a24b0788e638c742a3c505';

  private redirectLink = 'http://localhost:4200';
  private uri = 'https://accounts.spotify.com/';
  private apiUri = 'https://api.spotify.com/';
  private tokenLink = `${this.uri}api/token`;
  private getUserLink = `${this.apiUri}v1/me`;
  private searchLink = `${this.apiUri}v1/search`;

  authLink = `https://accounts.spotify.com/ru/authorize?client_id=${this.appId}&response_type=code&redirect_uri=${this.redirectLink}`;

  constructor(
    private http: HttpClient,
  ) { }

  getAccessToken(code: string): Observable<ITokens> {
    const body = `grant_type=authorization_code&code=${code}&redirect_uri=${this.redirectLink}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${this.appId}:${this.appKey}`)
    });
    return this.http.post<ITokens>(this.tokenLink, body, { headers: headers })
  }

  getUser(token: string): Observable<IUser> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<IUser>(this.getUserLink, { headers: headers });
  }

  getMusic(token: string, queryString: string, type:string, limit = 50): Observable<any> {
    const uri = `${this.searchLink}?q=${queryString}&type=${type}&limit=${limit}`
    // https://api.spotify.com/v1/search?q=muse&type=artist&limit=20
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    });

    return this.http.get<any>(uri, { headers: headers})

    // return fetch(uri, {
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}` 
    //     }
    // }).then(response => response.json())
  }
}
