import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { Theater } from 'src/app/models/theater';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {
  movies: Array<Movie> = [];
  theaters: Array<Theater> = [];
  movieId: any = '';
  rooms: any = [];
  sessions: any = '';

  constructor(
    private movieService: MovieService, 
    private actRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getMovies();
    this.actRoute.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      console.log(this.movieId);
    })
    this.getTheaters(this.movieId);
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(response => {
      this.movies = response;
      console.log(this.movies)
    })
  }

  getTheaters(id: string): void {
    this.movieService.getTheaters(id).subscribe(response => {
      this.theaters = response;
      console.log(this.theaters)
      console.log('pagina theaters'+id)

      this.rooms = this.theaters[0].rooms;
      console.log('domingo'+this.theaters)
      console.log('sabado'+ this.rooms)

      this.sessions = this.rooms[0].sessions;
      console.log('segunda'+this.sessions)
    })
  }

}
