import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Theater} from '../models/theater';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'https://61aa6838bfb110001773f224.mockapi.io/streamshop-test/api/v1/events';
  movieId: any = ''

  

  constructor(
    private httpClient: HttpClient, 
    private actRoute: ActivatedRoute,
    private router: Router
    ) { 
      
    }

    

  // Retorna lista de filmes
  getMovies():Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.apiUrl);
  }

  // Retorna lista de cinemas
  getTheaters(id: string):Observable<Theater[]> {
    console.log('service'+id)
    return this.httpClient.get<Theater[]>(`${this.apiUrl}/${id}/theaters`);
    
  }
}
