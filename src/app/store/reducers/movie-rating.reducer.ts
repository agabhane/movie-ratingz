import { createReducer, on, State, Action } from "@ngrx/store";
import { IMovie } from '../interfaces/movie-rating.interface';
import { fetchMoviesSuccess, rateMovie, sortMovies } from '../actions/movie-rating.action';

const initialState: IMovie[] = [];
const _movieRatingReducer = createReducer(initialState,
    on(fetchMoviesSuccess, (state, { movies }) => movies),
    on(rateMovie, (state, { id, rating }) => {
        return state.map(movie => {
            return {
                ...movie,
                rating: movie.id == id ? rating : movie.rating
            }
        })
    }),
    on(sortMovies, state => state.sort((a, b) => b.rating - a.rating))
)

export function movieRatingReducer(state: IMovie[], action: Action) {
    return _movieRatingReducer(state, action);
}