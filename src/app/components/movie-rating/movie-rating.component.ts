import { Component, OnInit } from "@angular/core";
import { IMovie } from 'src/app/store/interfaces/movie-rating.interface';
import { Store, select } from '@ngrx/store';
import { fetchMovies } from 'src/app/store/actions/movie-rating.action';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'movie-rating',
    templateUrl: './movie-rating.component.html',
    styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {
    constructor(private _store: Store<{ movies: IMovie[] }>) {
        this.movies$ = _store.pipe(select(state => state.movies))
    }
    title: string = 'Movie Ratings';
    movies$: Observable<IMovie[]>;

    ngOnInit() {
        this._store.dispatch(fetchMovies());
    }

}