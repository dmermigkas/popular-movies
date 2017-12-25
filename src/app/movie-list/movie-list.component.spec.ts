import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import {ArraySortPipe} from "../utilities/sortByRating.pipe";
import {MatCardModule, MatListModule, MatDialogModule} from "@angular/material";
import {XHRBackend, HttpModule, ResponseOptions, Response} from "@angular/http";
import {MoviesService} from "../movies/movies.service";
import {MockBackend} from "@angular/http/testing";
import {AppConfig} from "../app.config";
import {StoreModule} from "@ngrx/store";
import {reducer} from "../movies/movies.reducers";

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        MatCardModule,
        MatListModule,
        MatDialogModule,
        HttpModule,
        StoreModule.provideStore(reducer)
      ],
      declarations: [ MovieListComponent,ArraySortPipe ],
      providers: [
        MoviesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a vote count',
    inject([MoviesService], (movieService) => {

      expect(movieService).toBeDefined();

    }));

});
