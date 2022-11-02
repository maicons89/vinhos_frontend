import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./principal/principal.module').then((m) => m.PrincipalModule),
  },
  {
    path: 'catalogo',
    loadChildren: () =>
      import('./catalogo/catalogo.module').then((m) => m.CatalogoModule),
  },
  {
    path: 'quemsomos',
    loadChildren: () =>
      import('./quemsomos/quemsomos.module').then((m) => m.QuemsomosModule),
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('./contato/contato.module').then((m) => m.ContatoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
