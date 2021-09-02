import { MusicDataService } from '../app/shared/service/music.data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicLandingComponent } from './music-landing/music-landing.component';
import { MusicHeaderComponent } from './music-header/music-header.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { MusicListingComponent } from './music-listing/music-listing.component';
import { MusicPageNotFoundComponent } from './music-page-not-found/music-page-not-found.component';
import { HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MusicLandingComponent,
    MusicHeaderComponent,
    MusicFooterComponent,
    MusicListingComponent,
    MusicPageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MusicDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
