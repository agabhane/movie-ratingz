import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { MatToolbarModule, MatListModule, MatButtonModule } from "@angular/material";
import { StoreModule } from '@ngrx/store';
import { movieRatingReducer } from './store/reducers/movie-rating.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieRatingEffect } from './store/effects/movie-rating.effect';

@NgModule({
  declarations: [
    AppComponent,
    MovieRatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    StoreModule.forRoot({
      movies: movieRatingReducer
    }),
    EffectsModule.forRoot([MovieRatingEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
