import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import {MoviesService} from "./movies.service";
import {MoviesRoutingModule} from "./movies-routing.module";
import {MovieListComponent} from "../movie-list/movie-list.component";
import {MovieDetailsComponent} from "../movie-details/movie-details.component";
import {MatCardModule, MatListModule, MatDialogModule} from "@angular/material";
import {ArraySortPipe} from "../utilities/sortByRating.pipe";
import { StarRatingModule } from 'angular-star-rating';
import {EmptyListDialogComponent} from "../movie-list/movie-list-empty-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    StarRatingModule.forRoot(),
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MoviesRoutingModule
  ],
  entryComponents : [EmptyListDialogComponent],
  declarations: [MoviesComponent,MovieListComponent,MovieDetailsComponent,ArraySortPipe,EmptyListDialogComponent],
  providers : [MoviesService]
})
export class MoviesModule { }
