import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';
import { MatToolbarModule, MatListModule } from '@angular/material';
import { provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  let fixture, component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatListModule
      ],
      declarations: [
        AppComponent,
        MovieRatingComponent,
      ],
      providers: [
        provideMockStore()
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeDefined();
  });
});
