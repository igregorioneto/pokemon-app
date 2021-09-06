import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'poke-list',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/poke-list/poke-list.module').then( m => m.PokeListPageModule)
  },
  {
    path: 'poke-detail/:podeID',
    loadChildren: () => import('./pages/poke-detail/poke-detail.module').then( m => m.PokeDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
