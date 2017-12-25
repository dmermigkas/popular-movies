import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Movie} from "../movies/movies.model";
import {AppConfig} from "../app.config";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['movie-details.component.scss']
})
export class MovieDetailsComponent implements OnChanges{

  @Input() movie : Array<Movie>;

  constructor(private sanitization: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
  }

  get overview() {
    return this.movie['overview'];
  }

  getImage(url){
    return this.sanitization.bypassSecurityTrustStyle(`url(${AppConfig.imageUrl}${url}?apikey=${AppConfig.apikey})`);
  }

}
