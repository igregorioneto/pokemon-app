import { PokeCardComponent } from './../poke-card/poke-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PokeCardComponent
  ],
  exports: [
    PokeCardComponent,
  ]
})
export class SharedModule { }
