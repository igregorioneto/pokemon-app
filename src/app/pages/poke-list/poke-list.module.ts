import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeListPageRoutingModule } from './poke-list-routing.module';

import { PokeListPage } from './poke-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeListPageRoutingModule,
  ],
  declarations: [PokeListPage]
})
export class PokeListPageModule {}
