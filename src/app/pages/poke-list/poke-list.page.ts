import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.page.html',
  styleUrls: ['./poke-list.page.scss'],
})
export class PokeListPage implements OnInit {
  public data: any[] = [];
  public dataCharacterPoke: any[] = [];

  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit() {
    this.pokeService.listPokemons()
    .subscribe(poke => {
      this.data = poke.results;
      this.data.forEach(pokemon => {
        this.getPokemon(pokemon.name);
      });
    });
  }

  getPokemon(name: string) {
    this.pokeService.getPokemonName(name)
    .subscribe(poke => {
      this.dataCharacterPoke.push(poke);
    });
  }

}
