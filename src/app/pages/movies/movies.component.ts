import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Theater } from 'src/app/models/theater';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Array<Movie> = [];
  theaters: Array<Theater> = [];
  movieId: any = ''

  constructor(private movieService: MovieService, 
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
    this.actRoute.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      console.log(this.movieId);
    })
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(response => {
      this.movies = response;
    })
  }

  getTheaters(id: string): void {
    this.movieService.getTheaters(id).subscribe(response => {
      this.theaters = response;
      console.log(this.theaters)
      console.log('pagina movies'+id)
    })
  }

}