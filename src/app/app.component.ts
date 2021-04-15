import { Component, OnInit } from '@angular/core';
import { MovieService } from './core/services/movie.service';
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Spotflix';
  movies: any[] = [];
  POSTER_BASE = environment.POSTER_BASE + '/original/' ;
  isLoading = true;
  page = 1;
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

  ngOnInit() {
    const that = this;
    that.movieService.getTrending().subscribe(response => {
      that.movies = response.results;
      that.isLoading = false;
    }, err => {
      console.log(err);
    });
  }
}
