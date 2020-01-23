import { createReducer, on, State, Action } from "@ngrx/store";
import { IMovie } from '../interfaces/movie-rating.interface';
import { fetchMovies, fetchMoviesSuccess } from '../actions/movie-rating.action';

const initialState: IMovie[] = [];
const _movieRatingReducer = createReducer(initialState,
    on(fetchMoviesSuccess, (state, { movies }) => movies)
)

export function movieRatingReducer(state: IMovie[], action: Action) {
    return _movieRatingReducer(state, action);
}