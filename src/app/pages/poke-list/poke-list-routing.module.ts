import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokeListPage } from './poke-list.page';

const routes: Routes = [
  {
    path: '',
    component: PokeListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeListPageRoutingModule {}
