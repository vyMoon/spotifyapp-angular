import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { MusicComponent } from './components/music/music.component';

import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/reducers/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MusicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
