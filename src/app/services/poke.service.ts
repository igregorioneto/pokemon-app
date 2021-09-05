import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private readonly baseURL: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  public listPokemons(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}?limit=20`);
  }

  public getPokemonName(name: string): Observable<any>{
    return this.http.get<any>(`${this.baseURL}/${name}`);
  }
}
