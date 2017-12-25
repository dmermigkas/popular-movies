import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import {DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {MoviesService} from "./movies.service";
import {HttpModule} from "@angular/http";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./movies.reducers";

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let debugElement : DebugElement;
  let htmlElement : HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        HttpModule,
        StoreModule.provideStore(reducer)
      ],
      declarations: [ MoviesComponent ],
      providers : [MoviesService],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('h1'));
    htmlElement = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should diplay title', () => {
    expect(htmlElement.textContent).toEqual('Movie Viewer');
  });

});
