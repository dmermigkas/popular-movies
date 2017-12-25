import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {CdkTableModule} from '@angular/cdk/table';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {HttpModule} from "@angular/http";
import {MoviesModule} from "./movies/movies.module";
import {reducer} from "./movies/movies.reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTableModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    AppRoutingModule,
    MoviesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
