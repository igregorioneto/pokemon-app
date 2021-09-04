import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.page.html',
  styleUrls: ['./poke-list.page.scss'],
})
export class PokeListPage implements OnInit {
  public data: any[] = [];
  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit() {
    this.pokeService.listPokemons()
    .subscribe(poke => {
      console.log(poke.results);
      this.data = poke.results;
    });
  }

}
