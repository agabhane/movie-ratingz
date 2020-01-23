import { Component, OnInit } from "@angular/core";
import { IMovie } from 'src/app/store/interfaces/movie-rating.interface';
import { Store, select } from '@ngrx/store';
import { fetchMovies, rateMovie, sortMovies } from 'src/app/store/actions/movie-rating.action';
import { Observable, range, interval, of, timer, Subject, Subscribable, Subscription } from 'rxjs';
import { tap, concatMap, delay, repeat, mapTo, switchMap, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'movie-rating',
    templateUrl: './movie-rating.component.html',
    styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {
    constructor(private _store: Store<{ movies: IMovie[] }>) {
        this.movies$ = _store.pipe(select(state => state.movies));
        this.movies$.subscribe(movies => this._movies = movies);
    }
    title: string = 'Movie Ratings';
    movies$: Observable<IMovie[]>;
    private _movies: IMovie[] = [];
    private _randomSub: Subscription;
    rateMovie(id: number, rating: number) {
        this._store.dispatch(rateMovie({
            id,
            rating
        }));
        this._store.dispatch(sortMovies());
    }

    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomizeRating() {
        if (this._randomSub && !this._randomSub.closed) {
            this._randomSub.unsubscribe();
        } else {
            this._randomSub = of('')
                .pipe(
                    switchMap(() => timer(this.getRandomNumber(1000, 3000))),
                    repeat()
                )
                .subscribe(() => {
                    const randomIndex = this.getRandomNumber(0, this._movies.length - 1);
                    const randomRating = this.getRandomNumber(1, 5);
                    this._store.dispatch(rateMovie({
                        id: this._movies[randomIndex].id,
                        rating: randomRating
                    }));
                    this._store.dispatch(sortMovies());
                });
        }
    }

    ngOnInit() {
        this._store.dispatch(fetchMovies());
    }

}