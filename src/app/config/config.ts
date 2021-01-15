export const config ={
  appId: '818c23e06b0442dea473b5a767c2ce0e',
  appKey: '3a43ba09ac0f43f08152deeb7c70e839',
  redirectLink: 'http://localhost:4200',
}

export const links = {
  authLink: `https://accounts.spotify.com/ru/authorize?client_id=${config.appId}&response_type=code&redirect_uri=${config.redirectLink}`,
  tokenLink: `https://accounts.spotify.com/api/token`,
}

export class SpotifyApi {
  private uri = 'https://accounts.spotify.com/';
  private apiUri = 'https://api.spotify.com/';
  private authLink = `${this.uri}ru/authorize?client_id=${config.appId}&response_type=code&redirect_uri=${config.redirectLink}`;
  private getTokenLink = `${this.uri}api/token`;
  private getUserLink = `${this.apiUri}v1/me`;

  getAccessToken(code) {
      const body = `grant_type=authorization_code&code=${code}&redirect_uri=${config.redirectLink}`;
      return fetch(this.getTokenLink, {
          method: 'POST',
          headers: {
              "Authorization": 'Basic ' + btoa(config.appId + ':' + config.appKey),
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: body
      }).then(response => response.json());
  }

  getUserInformation(token) {
      return fetch(this.getUserLink, {
          headers: {
              Authorization: `Bearer ${token}`,
          }
      }).then(response => response.json())
  }
}
