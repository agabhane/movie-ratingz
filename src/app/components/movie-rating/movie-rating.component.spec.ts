import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { MovieRatingComponent } from './movie-rating.component';
import { MatToolbarModule, MatListModule } from '@angular/material';
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { Store } from '@ngrx/store';
import { IMovie } from 'src/app/store/interfaces/movie-rating.interface';

describe('MovieRating', () => {
  let fixture: ComponentFixture<MovieRatingComponent>,
    component: MovieRatingComponent,
    store: MockStore<{
      movies: IMovie[]
    }>;

  const initialState = {
    movies: []
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatListModule,
      ],
      providers: [
        provideMockStore({ initialState })
      ],
      declarations: [
        MovieRatingComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(MovieRatingComponent);
    component = fixture.debugElement.componentInstance;
    store = TestBed.get<Store<{ movies: IMovie[] }>>(Store);
  }));

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Movie Ratings');
  });

  it('should have movie observable', () => {
    expect(component.movies$).toBeDefined();
  })

  it('should dispatch fetch movie action on init', () => {
    spyOn(store, 'dispatch');
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalled();
  })

  it('should load movies when fetch movie action dispatched', (done) => {
    fixture.detectChanges();
    store.setState({
      movies: [{
        id: 1,
        name: 'One 1',
        rating: 2
      }, {
        id: 2,
        name: 'Two 2',
        rating: 4
      }]
    });
    fixture.detectChanges();
    component.movies$.subscribe(movies => {
      expect(movies.length).toEqual(2);
      done();
    });
  })

});
