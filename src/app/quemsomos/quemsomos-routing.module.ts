import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuemsomosComponent } from '../quemsomos/containers/quemsomos.component';

const routes: Routes = [{ path: '', component: QuemsomosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuemsomosRoutingModule {}
