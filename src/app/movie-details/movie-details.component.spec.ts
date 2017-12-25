import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';
import {StarRatingModule} from "angular-star-rating";
import {DebugElement} from "@angular/core";

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let debugElement : DebugElement;
  let htmlElement : HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ],
      imports : [
        StarRatingModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getImage function should return correct url', () => {
    let url = component.getImage('test');
    console.log(url);
    expect(url['changingThisBreaksApplicationSecurity']).toEqual('url(https://image.tmdb.org/t/p/w500/test?apikey=fdcd977a12ee20da2fe6ffd425012720)');
  });

});
