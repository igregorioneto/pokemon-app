import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.page.html',
  styleUrls: ['./poke-detail.page.scss'],
})
export class PokeDetailPage implements OnInit {
  public data: any;
  public name: string;
  public id: number;
  public types: string[] = [];
  public img: string;

  constructor(
    private readonly pokeServer: PokeService,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPokemon(Number(params.pokeID));
    });
  }

  getPokemon(id: number) {
    this.pokeServer.getPokemonID(id).subscribe(
      poke => {
        this.data = poke;
        this.name = poke.name;
        this.id = poke.id;
        this.types = poke.types;
        this.img = poke.sprites.other.dream_world.front_default;
        console.log(this.data);
      },
      (error) => {
        this.errorRequire(error);
      },
      () => {}
    );
  }

  errorRequire(error) {
    throw error;
  }

}
