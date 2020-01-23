import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { fetchMovies, fetchMoviesSuccess, sortMovies } from '../actions/movie-rating.action';
import { switchMap, map } from "rxjs/operators";
import { of } from 'rxjs';
import { movies as MoviesData } from '../data/movies.data';

@Injectable()
export class MovieRatingEffect {
    constructor(private _actions$: Actions) { }

    fetchMovies$ = createEffect(() => this._actions$.pipe(
        ofType(fetchMovies),
        switchMap(() => of(MoviesData)),
        switchMap(movies => [
            fetchMoviesSuccess({ movies }),
            sortMovies()
        ])
    ))
}