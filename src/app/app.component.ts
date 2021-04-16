import { Component, OnInit } from '@angular/core';
import { MovieService } from './core/services/movie.service';
import { environment } from '../environments/environment'
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Spotflix';
  movies: any[] = [];
  POSTER_BASE = environment.POSTER_BASE + '/original/';
  isLoading = true;
  opened = false;
  media = 'a';
  page = 1;
  cols = 3;
  scrolled = false;

  constructor(private movieService: MovieService) { }

  onScroll() {
    const that = this;
    that.scrolled = true;
    that.movieService.getTrending(++that.page).subscribe(response => {
      that.movies = that.movies.concat(response.results);
      that.isLoading = false;
      that.scrolled = false;
    }, err => {
      console.log(err);
    });
  }

  getMedia() {
    const that = this;
    that.isLoading = true;
    that.movieService.getTrending(that.page, that.media).subscribe(response => {
      that.movies = response.results;
      that.isLoading = false;
    }, err => {
      console.log(err);
    });
  }

  onChange(event: MatRadioChange) {
    this.media = event.value;
    this.getMedia();
  }  

  toggle() {
    this.opened = !this.opened;
    console.log("Triggered");
  }

  onResize(event: any) {
    this.cols = (event.target.innerWidth <= 500) ? 1 : (event.target.innerWidth) <= 1200 ? 2 : 3;
  }

  ngOnInit() {
    const that = this;
    that.cols = (window.innerWidth <= 500) ? 1 : (window.innerWidth) <= 1200 ? 2 : 3;
    that.getMedia();
  }
}
