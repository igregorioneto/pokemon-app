import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokeListPageRoutingModule } from './poke-list-routing.module';

import { PokeListPage } from './poke-list.page';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokeListPageRoutingModule,
    SharedModule
  ],
  declarations: [PokeListPage]
})
export class PokeListPageModule {}
