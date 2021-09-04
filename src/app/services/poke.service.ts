import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private readonly baseUTL: string = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  constructor(private http: HttpClient) { }

  public listPokemons(): Observable<any> {
    return this.http.get<any>(`${this.baseUTL}`);
  }
}
