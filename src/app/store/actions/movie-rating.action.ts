import { createAction, props } from "@ngrx/store";
import { IMovie } from '../interfaces/movie-rating.interface';

export const fetchMovies = createAction('[Movie Rating] Fetch movies');
export const fetchMoviesSuccess = createAction('[Movie Rating] Fetch movies success', props<{movies: IMovie[]}>());
export const rateMovie = createAction('[Movie Rating] Rate movie', props<{id: number, rating: number}>());
export const sortMovies = createAction('[Movie Rating] Sort movies');