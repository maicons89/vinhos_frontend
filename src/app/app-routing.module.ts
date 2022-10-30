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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
