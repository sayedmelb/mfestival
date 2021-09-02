import { MusicPageNotFoundComponent } from './music-page-not-found/music-page-not-found.component';
import { MusicListingComponent } from './music-listing/music-listing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MusicLandingComponent} from '../app/music-landing/music-landing.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "landing",

  },

  { path: "landing", component: MusicLandingComponent },
  { path: "listing", component: MusicListingComponent },
  {
    path: "**",
    component: MusicPageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
